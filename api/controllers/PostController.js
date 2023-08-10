import { validationResult } from "express-validator";

import PostModel from "../models/Post.js";

export const create = async (req, res) => {
	try {
		const doc = PostModel({
			title: req.body.title,
			popular: req.body.popular,
			text: req.body.text,
			viewCount: req.body.viewCount,
			category_id: req.body.category_id,
			country_id: req.body.country_id,
			city_id: req.body.city_id,
			img: req.body.img,
		});
		const title = await PostModel.findOne({
			title: req.body.title,
			text: req.body.text,
		});

		if (!title) {
			const post = await doc.save();
			return res.json(post);
		}
		res.status(403).json({
			message: "Пост уже существует",
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const getAllPosts = async (req, res) => {
	try {
		const posts = await PostModel.find();

		res.json(posts);
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const update = async (req, res) => {
	try {
		const postId = req.params.id;

		await PostModel.updateOne(
			{
				_id: postId,
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
		const postId = req.params.id;
		const doc = await PostModel.findOneAndUpdate(
			{
				_id: postId,
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
		const postId = req.params.id;
		const doc = await PostModel.findOneAndDelete({
			_id: postId,
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
