const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.jwt");
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

  app.post(
    "/api/auth/signin",
    controller.signin
  )
  app.post(
    "/api/auth/refreshtoken",
    controller.refreshToken
  )
};
