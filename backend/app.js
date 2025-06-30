const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
app.use("/", express.static("uploads"));
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    credentials: true,
  })
);
// app.use(cors({
// origin: "http://localhost:3000", // Your frontend URL
// credentials: true,
// methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
// }));

app.use(bodyParser.urlencoded({ extended: true }));

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//import routes
const user = require("./controller/user");
app.use("/api/v2/user", user);

//its for ErrorHandling
app.use(ErrorHandler);
module.exports = app;
