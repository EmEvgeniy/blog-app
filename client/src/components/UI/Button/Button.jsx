import classes from "./button.module.css";
import { Link } from "react-router-dom";

export const Button = ({ title, link }) => {
	return (
		<Link to={link} className={classes.Button}>
			{title}
		</Link>
	);
};
