const express = require("express");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const user = require("./routes/user");
const admin = require("./routes/admin");
const connect = require("./config/connectDB");
const app = express();
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));

app.use("/api/v1/auth", user);
app.use("/api/v1/admin", admin);
// app.use(cors({ origin: "*" }));
app.use(
  cors({
    origin: "*", // Use the environment variable
    credentials: true,
  })
);

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => console.log(`Server Running on port : ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
