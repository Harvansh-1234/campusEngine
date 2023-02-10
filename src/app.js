require("dotenv").config({ path: "./.env" });
const http = require("http");
require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// importing routes
const routes = require("./routes");

//Google auth
// app.get('/auth/google',
//   passport.authenticate('google', { scope:
//       [ 'email', 'profile' ] }
// ));

// app.get( '/auth/google/callback',
//     passport.authenticate( 'google', {
//         successRedirect: '/auth/google/success',
//         failureRedirect: '/auth/google/failure'
// }));

//
app.use(morgan("dev"));

// app.use(morgan("dev"));
app.use(cors());
// limit: '200mb',
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true }));

// importing routes
app.get("/", (req, res) => {
  console.log("server is fine!!!");
  res.status(200).send(" server up and running !!");
});
app.get("/env", (req, res) => {
  res.send(process.env.PORT);
});

app.use("/api", routes);

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);
server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
});
