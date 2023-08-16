import React, { useEffect, useState } from "react";
import SearchInput2 from "../UI/searchInput2/SearchInput2";
import { useSelector } from "react-redux";
import classes from "./filterComp.module.css";
import TopList from "../UI/topList/TopList";
import { useGetCategoriesQuery } from "../../store/middlewares/categoryApi";
import { AnimatePresence } from "framer-motion";

const FilterComp = () => {
	const [title, setTitle] = useState("");
	const lang = useSelector(state => state.lang.defValue);
	const { data: categories = [] } = useGetCategoriesQuery();

	useEffect(() => {
		if (lang === "RU") {
			setTitle("Выбирите категори");
		} else {
			setTitle("Choose A Categories");
		}
	}, [lang]);

	return (
		<AnimatePresence>
			<div className={classes.FilterComp}>
				<p>{title}</p>
				<SearchInput2 />
				<TopList list={categories} lang={lang} />
			</div>
		</AnimatePresence>
	);
};

export default FilterComp;
