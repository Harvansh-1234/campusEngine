require("dotenv").config({ path: "./.env" });
const http = require("http");
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
// require("./crontask/scrapper");
const app = express();
app.use(cors());
// importing routes
const routes = require("./routes");
const bodyParser = require("body-parser");
const uploadImage = require("./controllers/uploadImage.js");
const User = require("./models/user");

var Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

app.use(morgan("dev"));

// app.use(morgan("dev"));

// limit: '200mb',
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
// importing routes
var upload = multer({ storage: Storage });
app.post("/uploadImage", upload.single("uploads"), (req, res) => {
  console.log(req.body);
  uploadImage(req.body.image)
    .then((url) => {
      if (url) {
        User.findOne({ email: req.body.email }).then((user) => {
          user.profileImg = url;
          user.save();
        });

        res.send(url);
      } else {
        res.send("error in uploading image");
      }
      // find user by email and update the image url
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/", (req, res) => {
  console.log("server is fine!!!");
  res.status(200).send(" server up and running !!");
});
app.get("/env", (req, res) => {
  res.send(process.env.PORT);
});

app.use("/api", routes);

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});

//
// unverified jobs aat tnp ''''''' done
// verfy pe verify kardo   '''''''
// verified jobs listing for user  ''''''
// list off camous jobs '''''' done

// ui changes need to be made
// off campus jobs

// 


