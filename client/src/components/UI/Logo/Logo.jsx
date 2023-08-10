import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import classes from "./logo.module.css";

const Logo = () => {
	return (
		<div className={classes.logo}>
			<Link to={"/"}>
				<img src={logo} alt='logo' className={classes.img}/>
			</Link>
		</div>
	);
};

export default Logo;
