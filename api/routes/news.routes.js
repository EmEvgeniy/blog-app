import { Router } from "express";
import * as NewsController from "../controllers/NewsController.js";
import { newsValidation } from "../validations/news.js";
import checkAuth from "../utils/checkAuth.js";

const NewsRouter = new Router();

NewsRouter.post(
	"/news/create",
	newsValidation, 
	NewsController.create
);
NewsRouter.get("/news", NewsController.getAllNews);
NewsRouter.get("/news/:id", NewsController.getOne);
NewsRouter.delete("/news/:id",checkAuth, NewsController.remove);
NewsRouter.patch("/news/:id",checkAuth, NewsController.update);

export default NewsRouter;
