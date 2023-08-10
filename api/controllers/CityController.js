import CityModel from "../models/City.js";

export const create = async (req, res) => {
	try {
		const doc = new CityModel({
			title: req.body.title,
			popular: req.body.popular,
			viewCount: req.body.viewCount,
			country_id: req.body.country_id,
		});

		const title = await CityModel.findOne({
			title: req.body.title,
			country_id: req.body.country_id,
		});

		if (!title) {
			const city = await doc.save();
			return res.json(city);
		}
		res.status(403).json({
			message: "Город уже существует",
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const getAllCities = async (req, res) => {
	try {
		const cities = await CityModel.find();

		res.json(cities);
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
export const update = async (req, res) => {
	try {
		const cityId = req.params.id;

		await CityModel.updateOne({
			_id:cityId
		},{
			title: req.body.title,
			popular: req.body.popular,
			viewCount: req.body.viewCount,
			country_id: req.body.country_id
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
		const cityId = req.params.id;
		const doc = await CityModel.findOneAndUpdate(
			{
				_id: cityId,
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
				message: "Город не найдена",
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
		const cityId = req.params.id;
		const doc = await CityModel.findOneAndDelete({
			_id:cityId,
		})

		if (!doc) {
			return res.status(404).json({
				message: "Город не найдена",
			});
		}
		res.json({
			message: "Город был удален"
		})
	} catch (e) {
		console.log(e);
		res.status(500).json({
			message: "Произошла ошибка",
		});
	}
};
