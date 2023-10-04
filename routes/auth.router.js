const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Controller-Allow-Header",
      "x-access-token, Origin, cotent-Type, Accept"
    );
    next();
  });
  app.post(
    "/api/auth/signup",
    [verifySignUp.checkDuplicateUserOrEmail, verifySignUp.checkRolesExisted],
    controller.signup
  );
};
