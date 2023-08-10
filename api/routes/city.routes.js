import { Router } from "express";
import * as CityController from "../controllers/CityController.js";
import { cityValidation } from "../validations/city.js";
import checkAuth from "../utils/checkAuth.js";

const CityRouter = new Router();

CityRouter.post(
	"/city/create",
	cityValidation,
	checkAuth, 
	CityController.create
);
CityRouter.get("/cities", CityController.getAllCities);
CityRouter.get("/city/:id", CityController.getOne);
CityRouter.delete("/city/:id",checkAuth, CityController.remove);
CityRouter.patch("/city/:id",checkAuth, CityController.update);

export default CityRouter;
