const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;

//SignUp
exports.signup = (req, res) => {
  //save user to DB
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  }).then((user) => {
    if (req.body.roles) {
      Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles,
          },
        },
      }).then((roles) => {
        user.setRoles(
          roles).then(() => {
            res.send({ message: "User was registered successfully" });
          });
      });
    }else{
        //user role = 1 (user)
        user.setRoles([1]).then(() => {
            res.send({ message: "User was regintered successfully"})
        });
    }
  }).catch(err => {
    res.status(500).send({ message: err.message });
  })
};