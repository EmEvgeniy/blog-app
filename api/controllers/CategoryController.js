import { validationResult } from "express-validator";

import CategoryModel from "../models/Category.js";

export const create = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json(errors.array());
		}

		const doc = CategoryModel({
			title: req.body.title,
			popular: req.body.popular,
		});
		const category = await doc.save();

		res.json(category);
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const getAll = async (req, res) => {
	try {
		const categories = await CategoryModel.find();

		res.json(categories);
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const update = async (req, res) => {
	try {
		const categoryId = req.params.id;

		await CategoryModel.updateOne({
			_id:categoryId
		},{
			title: req.body.title,
			popular: req.body.popular,
			viewCount: req.body.viewCount
		})
		res.json({success: true})
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const getOne = async (req, res) => {
	try {
		const categoryId = req.params.id;
		const doc = await CategoryModel.findOneAndUpdate(
			{
				_id: categoryId,
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
				message: "Статья не найдена",
			});
		}

		res.json(doc);
	} catch (e) {
		console.log(e);
		res.status(501).json({
			message: "Произошла ошибка2",
		});
	}
};
export const remove = async (req, res) => {
	try {
		const categoryId = req.params.id;
		const doc = await CategoryModel.findOneAndDelete({
			_id:categoryId,
		})
		
		if (!doc) {
			return res.status(404).json({
				message: "Статья не найдена",
			});
		}
		res.json({
			message: "Категория была удалена"
		})
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка2",
		});
	}
};
