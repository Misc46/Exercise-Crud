const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
// const productRoute = require("./routes/product.route.js");
const userRoute = require("./routes/User.route.js");
const postRoute = require("./routes/post.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
// app.use("/api/products", productRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://hafidzdwifebri23:N81Ka0QAddCcgLJ7@exercisebemisc.xp0ap.mongodb.net/?retryWrites=true&w=majority&appName=ExerciseBEMisc"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
