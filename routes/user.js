const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.post("/user/signup", userCtrl.signup);
router.post("/user/login", userCtrl.login);
router.get("/user", userCtrl.getUser);
router.get("/user/:id", userCtrl.getOneUser);
router.put("/user/:id", userCtrl.modifyUser);
router.delete("/user/:id", userCtrl.deleteUser);

module.exports = router;
