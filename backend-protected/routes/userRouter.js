const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const express = require("express");
const router = express.Router();

const { loginUser, signupUser } = require("../controllers/userControllers");

router.post("/upload", upload.single("file"), (req, res) => {
  res.json({ filePath: `../../public/images/${req.file.filename}` });
});

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;
