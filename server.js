const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("MongoDB Connected ");
}).catch((err) => {
  console.log("MongoDB Error ", err);
});


const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000 ");
});


