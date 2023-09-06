const { restart } = require("nodemon");
const sql = require("./db");
//Constructor
const Restaurant = function (restaurant) {
  //Atrributes
  this.name = restaurant.name;
  this.type = restaurant.type;
  this.img = restaurant.img;
};

//Methods
Restaurant.create = (newRestaurant, result) => {
  //INSERT INTO restaurant SET name, type, img VALUES ("KFC","ไก่","URL");
  sql.query("INSERT INTO restaurants SET ?", newRestaurant, (err, res) => {
    //มี error
    if (err) {
      console.log("err", err);
      result(err, null);
      return;
    }
    //ไม่มี error
    console.log("new restaurant created");
    result(null, { id: res.id, ...newRestaurant });
  });
};

//GET ALL  restaurant
Restaurant.getAll = (result) => {
  //SELECT * FORM restaurants
  sql.query("SELECT * FROM restaurants", (err, res) => {
    if (err) {
      console.log("err", err);
      result(err, null);
      return;
    }
    //ไม่มี error
    console.log("get all restaurant");
    result(null, res);
  });
};

Restaurant.getById = (restaurantId, result) => {
  //SELECT * FROM restaurants WHERE id = restaurantId
  sql.query(
    `SELECT * FROM restaurants WHERE id = ${restaurantId}`,
    (err, res) => {
      //มี error
      if (err) {
        console.log("err", err);
        result(err, null);
        return;
      }
      //found 1 row
      console.log("new restaurant by id");
      if (res.length) {
        result(null, res[0]);
        return;
      }
      //nor found
      result({ kind: "not_found" }, null);
    }
  );
};

//UPDATE Restaurant
Restaurant.updateById = (id, restaurant, result) => {
  //UPDATE restaurants SET name = "name", type = "type", img = "img" WHERE id = "id"
  sql.query(
    "UPDATE restaurants SET name = ?, type = ?, img = ? WHERE id = ?",
    [restaurant.name, restaurant.type, restaurant.img, id],
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if ((res.affectedRows == 0)) {
        result({ kind: "not_found" }, null);
        return;
      }
      result(null, { id: id, ...restaurant });
    }
  );
};

//Delete a restaurant
Restaurant.deleteById = (restaurantId, result) => {
  sql.query(
    "DELETE FROM restaurants WHERE id = ?",
    restaurantId,
    (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      //Restaurant delete
      console.log("Restaurant id " + restaurantId + "is Delete");
      result(null, res);
    }
  );
};

module.exports = Restaurant;
