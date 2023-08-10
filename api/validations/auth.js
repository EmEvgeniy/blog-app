import { body} from 'express-validator'

export const registerValidation = [
	body('email',"Неверный формат почты").isEmail(),
	body('password', 'Пароль должен содержать минимум 5 цифр').isLength({min:5})
];