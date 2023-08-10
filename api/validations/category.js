import { body} from 'express-validator'

export const categoryValidation = [
	body('title',"Неверный формат наименования").isString()
];