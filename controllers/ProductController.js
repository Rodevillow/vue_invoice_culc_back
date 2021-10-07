const Product = require("../models/Product");

class productController {
	async getAll(req, res) {
		try {
			res.json({
				success: true,
				data: await Product.find(),
			});
		} catch (e) {
			console.log("getProducts", e);
		}
	}

	async create(req, res) {
		try {
			const { title, price, quantity } = req.body;
			const product = new Product({
				title,
				price,
				quantity,
			});
			await product.save();

			return res.json({
				success: true,
				data: product,
				message: "Creating new product is successfull!",
			});
		} catch (e) {
			console.log("createProduct", e);
		}
	}

	async remove(req, res) {
		try {
			let idsToRemove = req.query?.ids.split(",");
			Product.deleteMany({ _id: { $in: idsToRemove } }, (err) => {
				if (err !== null) {
					return res.json({
						success: false,
						message: "Deleting is unsuccessfull!",
					});
				}
			});

			return res.json({
				success: true,
				message: "Deleting is successfull!",
			});
		} catch (e) {
			console.log("createProduct", e);
		}
	}
}

module.exports = new productController();
