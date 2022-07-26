var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  console.log(req.body);
  if (!req.body.userName || !req.body.password) {
    res.json({ errorMessage: "Please enter a User Name and Password" });
    return;
  }

  //TO DO: Query database
  res.json({
    userAuthenticated: true,
  });
});

module.exports = router;
