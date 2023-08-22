import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import AuthRouter from "./routes/auth.routes.js";
import CategoryRouter from "./routes/category.routes.js";
import CountryRouter from "./routes/country.routes.js";
import PostRouter from "./routes/post.routes.js";
import checkAuth from "./utils/checkAuth.js";
import CityRouter from "./routes/city.routes.js";
import CityModel from './models/City.js'
import NewsRouter from "./routes/news.routes.js";
import cors from "cors";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import TelegramBot from "node-telegram-bot-api";

const botToken = "6526594197:AAF3YJQCuKx4lvXy3GUDjqgYUDIrAZYc9fU";

mongoose
	.connect(
		"mongodb+srv://admin:lord6379318@cluster0.vozsmol.mongodb.net/blog-app?"
	)
	.then(() => {
		console.log("DB connected");
	})
	.catch(e => console.log("DB error!", e));
const bot = new TelegramBot(botToken, { polling: true });
const app = express();

// const allowedOrigins = ['https://puputravel.com'];

app.use(cors());
const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, "uploads");
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });
const swaggerFile = JSON.parse(fs.readFileSync("./swagger/output.json"));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	});
});

const commands = [
	{
		command: "start",
		description: "Бот успешно запушен!",
	},
];
bot.setMyCommands(commands);
const data = {
	city: "",
	userName: "",
	usedID: "",
};
bot.on("text", async (msg) => {
	const cities = await CityModel.find();
	try {
		if (msg.text.startsWith("/start")) {
			await bot.sendMessage(msg.chat.id, "Текст: Выберите экскурсию👇", {
				reply_markup: {
					keyboard: [
						["📃 Список городов", "📖 Описание городов"],
						["🚚 Мои заказы", "🛒 Заказать"],
						["🧑‍💼 Проконсультироваться"],
					],
					resize_keyboard: true,
				},
			});
		} else if (msg.text == "📃 Список городов") {
			await bot.sendMessage(msg.chat.id, "Список городов", {
				reply_markup: {
					keyboard: [cities.map((el) => el.title), ["Назад"]],
				},
			});
		} else if (msg.text == "Назад") {
			await bot.sendMessage(msg.chat.id, "Вы вернулись к главному меню", {
				reply_markup: {
					keyboard: [
						["📃 Список городов", "📖 Описание городов"],
						["🚚 Мои заказы", "🛒 Заказать"],
						["🧑‍💼 Проконсультироваться"],
					],
					resize_keyboard: true,
				},
			});
		} else if (msg.text == "📖 Описание городов") {
			await bot.sendMessage(msg.chat.id, "Список городов", {
				reply_markup: {
					keyboard: [cities.map((el) => el.title), ["Назад"]],
				},
			});
		}else if(cities.includes(msg.text)){
			await bot.sendMessage(msg.chat.id, `Вы выбрали ${msg.text} `, {
				reply_markup: {
					keyboard: [
						["📄 Описание", "🛫 Эк"],
						["🚚 Мои заказы", "🛒 Заказать"],
						["🧑‍💼 Проконсультироваться"],
					],
					resize_keyboard: true,
				},
			});
		}
	} catch (e) {
		console.log(e);
	}
});


app.use("/api", AuthRouter);
app.use("/api", CategoryRouter);
app.use("/api", CountryRouter);
app.use("/api", PostRouter);
app.use("/api", CityRouter);
app.use("/api", NewsRouter);
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(8000, e => {
	if (e) {
		return console.log(e);
	}
	console.log("Server ok!");
});
