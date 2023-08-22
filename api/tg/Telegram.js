// telegramBot.js
import TelegramBot from "node-telegram-bot-api";
import CityModel from "../models/City.js";

const botToken = "6526594197:AAF3YJQCuKx4lvXy3GUDjqgYUDIrAZYc9fU";

const bot = new TelegramBot(botToken, { polling: true });

const mainMenuKeyboard = [
	["📃 Список городов", "📖 Описание городов"],
	["🚚 Мои заказы", "🛒 Заказать"],
	["🧑‍💼 Проконсультироваться"],
];

const backKeyboard = [["Назад"]];

const setupTelegramBot = () => {
	const userStack = []; // Стек для хранения предыдущих меню
	bot.on("text", async (msg) => {
		const cities = await CityModel.find();
		try {
			if (msg.text.startsWith("/start")) {
				userStack.length = 0; // Очищаем стек при старте бота
				await bot.sendMessage(msg.chat.id, "Текст: Выберите экскурсию👇", {
					reply_markup: {
						keyboard: mainMenuKeyboard,
						resize_keyboard: true,
					},
				});
			} else if (msg.text == "📃 Список городов") {
				userStack.push(mainMenuKeyboard); // Сохраняем текущее меню в стеке
				await bot.sendMessage(msg.chat.id, "Список городов", {
					reply_markup: {
						keyboard: [cities.map((el) => el.title), ...backKeyboard],
						resize_keyboard: true,
					},
				});
			} else if (msg.text == "Назад" && userStack.length > 0) {
				const prevMenu = userStack.pop(); // Извлекаем предыдущее меню из стека
				await bot.sendMessage(msg.chat.id, "Вы вернулись назад", {
					reply_markup: {
						keyboard: prevMenu,
						resize_keyboard: true,
					},
				});
			} else if (msg.text == "📖 Описание городов") {
				userStack.push(mainMenuKeyboard); // Сохраняем текущее меню в стеке
				await bot.sendMessage(msg.chat.id, "Список городов", {
					reply_markup: {
						keyboard: [cities.map((el) => el.title), ...backKeyboard],
					},
				});
			} else if (cities.some((city) => city.title === msg.text)) {
				await bot.sendMessage(msg.chat.id, `Вы выбрали  ${msg.text}`, {
					reply_markup: {
						keyboard: [cities.map((el) => el.lang), ...backKeyboard],
					},
				});
			}
		} catch (e) {
			console.log(e);
		}
	});
};

export default setupTelegramBot;
