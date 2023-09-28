const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item.controller");

router.get("/getAll", itemController.getAll);
router.post("/post", itemController.create);
router.put("/update/:id", itemController.update);
router.delete("/delete/:id", itemController.remove);

module.exports = router;
