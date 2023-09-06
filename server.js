const express = require("express");
const restaurantRouter = require("./routes/restaurant.router");
const cors = require("cors");
const sql = require("./models/db");
const PORT = 5000;

//creat server
const app = express();
const notFoundMiddleware = require('./middleware/not-found.js');
const notFound = require("./middleware/not-found.js");
//user middelwere
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h1> this is a restaurant API </h1>");
});

app.use("/", restaurantRouter);
app.use(notFoundMiddleware);

app.listen(PORT, () => {
  console.log("server is runing on http://localhost:" + PORT);
});
