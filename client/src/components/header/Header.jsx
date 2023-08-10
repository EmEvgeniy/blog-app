import Container from "../container/Container";
import classes from "./header.module.css";
import Logo from "../UI/Logo/Logo";
import SearchInput from "../UI/searchInput/SearchInput";
import LangSelect from "../UI/langSelect/LangSelect";
import Nav from "../UI/nav/Nav";

const Header = () => {
	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.inner}>
					<Logo />
					<div className={classes.nav}>
						<SearchInput />
						<Nav />
						<LangSelect />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
