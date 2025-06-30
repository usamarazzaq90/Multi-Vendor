const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix=Date.now() + "-" + Math.round(Math.random() * 1E9);
    const filename=file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png");
    // cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({ storage: storage });
