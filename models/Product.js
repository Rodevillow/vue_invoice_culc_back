const { Schema, model } = require("mongoose");

const Product = new Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	quantity: {
		type: String,
		required: true,
	},
});

module.exports = model("Product", Product);
