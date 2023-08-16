import React from "react";
import classes from "./defPage.module.css";
import Container from "../../components/container/Container";

const DefPage = () => {
	return (
		<div className={classes.DefPage}>
			<Container>
				<div className={classes.inner}>
					<h1>Проводяться технические работы!!!</h1>
				</div>
			</Container>
		</div>
	);
};

export default DefPage;
