import { validationResult } from "express-validator";

import NewsModel from "../models/News.js";

export const create = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json(errors.array());
		}

		const doc = NewsModel({
			title: req.body.title,
			popular: req.body.popular,
			text: req.body.text,
			viewCount: req.body.viewCount,
			category_id: req.body.category_id,
			country_id: req.body.country_id,
			city_id: req.body.city_id,
			img: req.body.img,
		});
		const title = await NewsModel.findOne({
			title: req.body.title,
			text: req.body.text,
		});

		if (!title) {
			const news = await doc.save();
			return res.json(news);
		}
		res.status(403).json({
			message: "Новость уже существует",
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const getAllNews = async (req, res) => {
	try {
		const news = await NewsModel.find();

		res.json(news);
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "ошибка",
		});
	}
};
export const update = async (req, res) => {
	try {
		const newsId = req.params.id;

		await NewsModel.updateOne(
			{
				_id: newsId,
			},
			{
				title: req.body.title,
				text: req.body.text,
				popular: req.body.popular,
				viewCount: req.body.viewCount,
				category_id: req.body.category_id,
				country_id: req.body.country_id,
				city_id: req.body.city_id,
				img: req.body.img,
			}
		);
		res.json({ success: true });
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const getOne = async (req, res) => {
	try {
		const newsId = req.params.id;
		const doc = await NewsModel.findOneAndUpdate(
			{
				_id: newsId,
			},
			{
				$inc: { viewCount: 1 },
			},
			{
				returnDocument: true,
			}
		);

		if (!doc) {
			return res.status(404).json({
				message: "Пост не найдена",
			});
		}

		res.json(doc);
	} catch (e) {
		console.log(e);
		res.status(501).json({
			message: "Произошла ошибка",
		});
	}
};
export const remove = async (req, res) => {
	try {
		const newsId = req.params.id;
		const doc = await NewsModel.findOneAndDelete({
			_id: newsId,
		});

		if (!doc) {
			return res.status(404).json({
				message: "Пост не найден",
			});
		}
		res.json({
			message: "Пост была удален",
		});
	} catch (e) {
		console.log(e);
		res.status(501).json({
			message: "Произошла ошибка2",
		});
	}
};
