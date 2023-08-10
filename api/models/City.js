import mongoose from "mongoose";

const CitySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	popular: {
		type: Boolean,
		default: false
	},
	lang:{
		type: String,
		default: "eng",
		required:true
	},
	viewCount:{
		type: Number,
		default: 0,
	},
	country_id:{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Country",
		required: true,
	}
})

export default mongoose.model('City', CitySchema)