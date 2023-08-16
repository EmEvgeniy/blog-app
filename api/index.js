import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import AuthRouter from "./routes/auth.routes.js";
import CategoryRouter from "./routes/category.routes.js";
import CountryRouter from "./routes/country.routes.js";
import PostRouter from "./routes/post.routes.js";
import checkAuth from "./utils/checkAuth.js";
import CityRouter from "./routes/city.routes.js";
import NewsRouter from "./routes/news.routes.js";
import cors from "cors";
import fs from "fs";
import swaggerUi from "swagger-ui-express";

mongoose
	.connect(
		"mongodb+srv://admin:lord6379318@cluster0.vozsmol.mongodb.net/blog-app?"
	)
	.then(() => {
		console.log("DB connected");
	})
	.catch(e => console.log("DB error!", e));

const app = express();

const allowedOrigins = ['https://puputravel.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
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
