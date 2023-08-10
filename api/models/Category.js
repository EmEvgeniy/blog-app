import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	popular: {
		type: Boolean,
		default: false
	},
	viewCount:{
		type: Number,
		default: 0,
	},
	lang: {
		type: String,
		default: "eng",
		required:true
	}
})

export default mongoose.model('Category', CategorySchema)