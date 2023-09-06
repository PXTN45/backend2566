const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");

//Insert restaurant to DB
router.post("/restaurants", (req, res) => {
  const newRestaurant = new Restaurant({
    //Create Restaurant instance
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
  });
  //Insert ti DB
  Restaurant.create(newRestaurant, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while inserting the new restaurant",
      });
    } else {
      res.send(data);
    }
  });
});

//Get all restaurants
//http://localhost:5000/restaurants
router.get("/restaurants", (req, res) => {
  Restaurant.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while inserting the new restaurant",
      });
    } else {
      res.send(data);
    }
  });
});

//Get restaurants By Id
//http://localhost:5000/restaurants/1
router.get("/restaurants/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id);
  Restaurant.getById(restaurantId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: "restaurant not found with this id " + restaurantId,
        });
      } else {
        res.status(500).send({
          message:
            err.message ||
            "Some error occured while inserting the new restaurant",
        });
      }
    } else {
      res.send(data);
    }
  });
});

router.put("/restaurants/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Attributes can not be empty !",
    });
  }
  Restaurant.updateById(restaurantId, new Restaurant(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: "restaurant not found with this id " + restaurantId,
        });
      } else {
        res.status(500).send({
          message:
            err.message ||
            "Some error occured while inserting the new restaurant",
        });
      }
    } else {
      res.send(data);
    }
  });
});

router.delete("/restaurants/:id", (req, res) => {
  const restaurantId = Number.parseInt(req.params.id);
  Restaurant.deleteById(restaurantId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).send({
          message: "restaurant not found with this id " + restaurantId,
        });
      } else {
        res.status(500).send({
          message:
            err.message ||
            "Some error occured while inserting the new restaurant",
        });
      }
    } else {
      res.send({
        message: "Restaurant id " + restaurantId + "is delete",
      });
    }
  });
});

module.exports = router;
