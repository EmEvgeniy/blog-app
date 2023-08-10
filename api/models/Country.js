import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	popular: {
		type: Boolean,
		default: false,
	},
	lang: {
		type: String,
		default: "eng",
		required: true,
	},
	viewCount: {
		type: Number,
		default: 0,
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: true,
	},
});

export default mongoose.model("Country", CountrySchema);
