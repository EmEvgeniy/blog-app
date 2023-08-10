import { body} from 'express-validator'

export const postValidation = [
	body('title',"Неверный формат наименования").isString(),
	body('country_id',"Неверный формат ").isMongoId(),
	body('category_id',"Неверный формат ").isMongoId(),
	body('city_id',"Неверный формат ").isMongoId(),
	body('text',"Неверный формат ").isString(),
	body('text',"Неверный формат ").isString(),

];