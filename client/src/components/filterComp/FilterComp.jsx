import React, { useEffect, useState } from "react";
import SearchInput2 from "../UI/searchInput2/SearchInput2";
import { useSelector } from "react-redux";
import classes from './filterComp.module.css'
import TopList from "../UI/topList/TopList";
import { useGetCategoriesQuery } from "../../store/middlewares/categoryApi";

const FilterComp = ({list}) => {
	const [title, setTitle] = useState("");
	const lang = useSelector(state => state.lang.defValue);
	const {data: categories=[]} = useGetCategoriesQuery()
console.log(categories);
	useEffect(() => {
		if (lang === "RU") {
			setTitle("Выбирите категорию");
		} else {
			setTitle("Choose A Categories");
		}
	}, [lang]);
	return (
		<div className={classes.FilterComp}>
			<p>{title}</p>
			<SearchInput2 />
			<TopList list={list}/>
		</div>
	);
};

export default FilterComp;
