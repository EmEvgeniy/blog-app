import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		lang:{
			type:String,
			default:"eng",
			required: true,
		},
		popular: {
			type: Boolean,
			default: false,
		},
		viewCount: {
			type: Number,
			default: 0,
		},
		category_id: {
			type: Array,
			required: true,
			default: [],
		},
		country_id: {
			type: Array,
			required: true,
			default: [],
		},
		city_id: {
			type: Array,
			required: true,
			default: [],
		},
		img: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("News", NewsSchema);
