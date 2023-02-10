const mongoose = require("mongoose");

// Connection created to mongodb using mongoose
mongoose.connect(process.env.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.info("Connected to Mongo.");
});

mongoose.connection.on("error", (err) => {
  console.error("Error occured while connecting to Mongo:- ", err.message);
});
