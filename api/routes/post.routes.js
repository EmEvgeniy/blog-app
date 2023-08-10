import { Router } from "express";
import * as PostController from "../controllers/PostController.js";
import { postValidation } from "../validations/post.js";
import checkAuth from "../utils/checkAuth.js";
import handleErrors from "../utils/handleErrors.js";

const PostRouter = new Router();

PostRouter.post(
	"/post/create",
	postValidation,
	handleErrors,
	PostController.create
);
PostRouter.get("/posts", PostController.getAllPosts);
PostRouter.get("/post/:id", handleErrors, PostController.getOne);
PostRouter.delete("/post/:id", checkAuth, PostController.remove);
PostRouter.patch("/post/:id", checkAuth, PostController.update);

export default PostRouter;
