import React from "react";
import classes from "./searchInput.module.css";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";

const SearchInput = () => {
	const lang = useSelector(state => state.lang.defValue);
	return (
		<div className={classes.SearchInput}>
			<IconContext.Provider value={{ color: "black", size: "25px" }}>
				<AiOutlineSearch />
			</IconContext.Provider>
			<input
				type='search'
				placeholder={lang === "RU" ? "Поиск..." : "Search.."}
			/>
		</div>
	);
};

export default SearchInput;
