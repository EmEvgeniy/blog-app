import React, { useEffect, useState } from "react";
import classes from "./topList.module.css";
import { useSelector } from "react-redux";

const TopList = ({list}) => {
	const [title, setTitle] = useState("");
	const lang = useSelector(state => state.lang.defValue);

	useEffect(() => {
		if (lang === "RU") {
			setTitle("Популярные");
		} else {
			setTitle("Popular");
		}
	}, [lang]);
	return (
		<div className={classes.TopList}>
			<p>{title}:</p>
			<ul>
				{list.map((el,index)=> <li key={index}>{el}</li>)}
			</ul>
		</div>
	);
};

export default TopList;
