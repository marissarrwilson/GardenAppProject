const express = require("express");

const mongoose = require("mongoose");
const apiRouter = require("./routes/index");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
apiRouter(app);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/gardenapp",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

app.use("/users", require("./routes/userRouter"));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
