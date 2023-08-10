import { body} from 'express-validator'

export const cityValidation = [
	body('title',"Неверный формат наименования").isString(),
	body('country_id',"Неверный формат ").isMongoId()
];