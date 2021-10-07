const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/db");
const cors = require("cors");

const app = express();
const PORT = 9000;

// * * * * * * * * * * * * * * * * * * * *
// Routers
const productRouter = require("./routes/ProductRouter");
// * * * * * * * * * * * * * * * * * * * *

// * * * * * * * * * * * * * * * * * * * *
// Enable "Access-Control-Allow-Origin"
app.use(cors());
app.options("*", cors());
// * * * * * * * * * * * * * * * * * * * *
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// * * * * * * * * * * * * * * * * * * * *
// Routes
// * * * * * * * * * * * * * * * * * * * *
// Welcome route
app.get("/", (req, res) => {
	res.send("Welcome to Vue Invoice Calc server...");
});
// API routes
app.use("/api/products", productRouter);
// * * * * * * * * * * * * * * * * * * * *

// Start func
const start = async () => {
	try {
		await mongoose.connect(db.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		app.listen(PORT, () => {
			console.log(`Serve has running... On port = ${PORT}`);
		});
	} catch (e) {
		console.log(e);
	}
};
// Run server with mongodb
start();
