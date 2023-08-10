import { useCallback, useEffect, useMemo, useState } from "react";
import classes from "./nav.module.css";
import { useSelector } from "react-redux";

const Nav = () => {
	const [list, setList] = useState([]);
	const lang = useSelector(state => state.lang.defValue);
	const ruNav = useMemo(() => ["Категории", "Страны", "О нас"], []);
	const engNav = useMemo(() => ["Categories", "Countries", "About us"], []);

	const fn = useCallback(() => {
		if (lang === "RU") {
			setList(ruNav);
		} else {
			setList(engNav);
		}
	}, [lang, engNav, ruNav]);

	useEffect(() => {
		fn();
	}, [fn]);
	return (
		<ul className={classes.Nav}>
			{list.map((el, index) => (
				<li key={index}>{el}</li>
			))}
		</ul>
	);
};

export default Nav;
