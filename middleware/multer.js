//Multer Config for user signup function
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      req.body.username + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
exports.upload = multer({ storage: storage });
