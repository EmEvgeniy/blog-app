import { Router } from "express";
import * as CountryController from "../controllers/CountryController.js";
import { countryValidation } from "../validations/country.js";
import checkAuth from "../utils/checkAuth.js";

const CountryRouter = new Router();

CountryRouter.post(
	"/country/create",
	countryValidation,
	checkAuth, 
	CountryController.create
);
CountryRouter.get("/countries", CountryController.getAllCountries);
CountryRouter.get("/country/:id", CountryController.getOne);
CountryRouter.delete("/country/:id",checkAuth, CountryController.remove);
CountryRouter.patch("/country/:id",checkAuth, CountryController.update);

export default CountryRouter;
