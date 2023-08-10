import AuthRouter from "./routes/auth.routes.js";
import CategoryRouter from "./routes/category.routes.js";
import CountryRouter from "./routes/country.routes.js";
import PostRouter from "./routes/post.routes.js";
import checkAuth from "./utils/checkAuth.js";
import CityRouter from "./routes/city.routes.js";
import NewsRouter from "./routes/news.routes.js";

export default {
	AuthRouter,
	CategoryRouter,
	CountryRouter,
	PostRouter,
	checkAuth,
	CityRouter,
	NewsRouter
}