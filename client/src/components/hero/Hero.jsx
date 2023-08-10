import { Button } from "../UI/Button/Button";
import Container from "../container/Container";
import classes from "./hero.module.css";

const Hero = () => {
	return (
		<section className={classes.Hero}>
			<Container>
				<div className={classes.inner}>
					<h2>our mission</h2>
					<h1>Access to all the latest information of the world</h1>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
						cupidatat non proident.
					</p>
					<Button title={"Read more"}/>
				</div>
			</Container>
		</section>
	);
};

export default Hero;
