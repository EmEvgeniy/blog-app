import { Router } from "express";
import * as UserController from "../controllers/UserController.js";
import { registerValidation } from "../validations/auth.js";
import checkAuth from "../utils/checkAuth.js";
import handleErrors from "../utils/handleErrors.js";

const AuthRouter = new Router();

AuthRouter.post("/auth/login", handleErrors, UserController.login);
AuthRouter.post(
	"/auth/register",
	registerValidation,
	handleErrors,
	UserController.register
);
AuthRouter.get("/auth/me",checkAuth, handleErrors, UserController.getMe);

export default AuthRouter;
