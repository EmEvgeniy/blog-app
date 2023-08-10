import React, { useState } from "react";
import classes from "./langSelect.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "../../../store/slices/lang";

const LangSelect = () => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	const list = useSelector(state => state.lang.value);
	const listItem = useSelector(state => state.lang.defValue);
	return (
		<div className={classes.LangSelect}>
			<span onClick={() => setActive(true)}>{listItem}</span>
			<div
				className={
					active ? `${classes.list} ${classes.active}` : `${classes.list}`
				}
			>
				{list.map((el, index) => (
					<span
						onClick={() => dispatch(setLang(el)) & setActive(false)}
						key={index}
					>
						{el}
					</span>
				))}
			</div>
		</div>
	);
};

export default LangSelect;
