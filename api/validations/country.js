import { body} from 'express-validator'

export const countryValidation = [
	body('title',"Неверный формат наименования").isString(),
	body('category',"Неверный формат ").isMongoId()
];