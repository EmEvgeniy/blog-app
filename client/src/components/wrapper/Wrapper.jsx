import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import classes from './wrapper.module.css'

const Wrapper = ({ children }) => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div className={classes.Wrapper}>
			<Header />
			<main className={classes.main}>
				{children}
			</main>
			<Footer/>
		</div>
	);
};

export default Wrapper;
