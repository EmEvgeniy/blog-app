import React from "react";
import Container from "../container/Container";
import classes from "./news.module.css";
import FilterComp from "../filterComp/FilterComp";

const News = () => {
	const list = [
		"Travel",
		"Bussines",
		" Technique",
		"Food",
		"Cars",
		"Motorcycles",
		"Medicine",
		"Finance",
	];
	return (
		<div>
			<Container>
				<div className={classes.inner}>
					<FilterComp list={list}/>
				</div>
			</Container>
		</div>
	);
};

export default News;
