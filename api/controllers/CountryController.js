import CountryModel from "../models/Country.js";

export const create = async (req, res) => {
	try {
		const doc = new CountryModel({
			title: req.body.title,
			popular: req.body.popular,
			viewCount: req.body.viewCount,
			category: req.body.category,
		});

		const title = await CountryModel.findOne({
			title: req.body.title,
			category: req.body.category,
		});

		if (!title) {
			const country = await doc.save();
			return res.json(country);
		}else{
			res.status(403).json({
				message: "Статья уже существует",
			});
		}
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const getAllCountries = async (req, res) => {
	try {
		const countries = await CountryModel.find();

		res.json(countries);
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const update = async (req, res) => {
	try {
		const countryId = req.params.id;

		await CountryModel.updateOne({
			_id:countryId
		},{
			title: req.body.title,
			popular: req.body.popular,
			viewCount: req.body.viewCount,
			category: req.body.category
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
		const countryId = req.params.id;
		const doc = await CountryModel.findOneAndUpdate(
			{
				_id: countryId,
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
		const countryId = req.params.id;
		const doc = await CountryModel.findOneAndDelete({
			_id:countryId,
		})

		if (!doc) {
			return res.status(404).json({
				message: "Статья не найдена",
			});
		}
		res.json({
			message: "Страна была удалена"
		})
	} catch (e) {
		console.log(e);
		res.status(501).json({
			message: "Произошла ошибка2",
		});
	}
};
