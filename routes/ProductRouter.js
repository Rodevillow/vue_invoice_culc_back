const Router = require("express");
const router = new Router();
const productController = require("../controllers/ProductController");

router.get("/", [], productController.getAll);
router.post("/", [], productController.create);
router.delete("/", [], productController.remove);

module.exports = router;
