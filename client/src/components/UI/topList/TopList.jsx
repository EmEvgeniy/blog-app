import React, { useEffect, useState } from "react";
import classes from "./topList.module.css";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const TopList = ({ list }) => {
	const [title, setTitle] = useState("");
	const [listC, setListC] = useState([]);
	const lang = useSelector(state => state.lang.defValue);

	useEffect(() => {
		if (lang === "RU") {
			setTitle("Популярные");
		} else {
			setTitle("Popular");
		}
	}, [lang]);

	useEffect(() => {
		if (lang === "RU") {
			setListC(list.filter(el => el.lang === "ru"));
		} else {
			setListC(list.filter(el => el.lang === "eng"));
		}
	}, [lang, list]);
	return (
		<div className={classes.TopList}>
			<p>{title}:</p>
			<motion.ul
				initial={{ opacity: 0 }}
				animate={listC.length ? { opacity: 1 } : { opacity: 0 }}
				transition={{ delay: 0.2 }}
				exit={{ opacity: 0 }}
			>
				{listC.map((el, index) => (
					<li key={index}>{el.title}</li>
				))}
			</motion.ul>
		</div>
	);
};

export default TopList;
