const express = require("express");
const router = express.Router();
const orderCtrl = require("../controllers/order");

router.post("/order", orderCtrl.createOrder);
router.get("/order", orderCtrl.getOrder);
router.get("/order/:id", orderCtrl.getOneOrder);
router.put("/order/:id", orderCtrl.modifyOrder);
router.delete("/order/:id", orderCtrl.deleteOrder);

module.exports = router;
