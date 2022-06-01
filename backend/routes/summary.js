var express = require("express");
var router = express.Router();

router.post("/", function (req, res, next) {
  console.log(req.body);
  if (!req.body.id) {
    res.json({ errorMessage: "User name not found." });
    return;
  }

  //TO DO: Query database
  res.json({
    user: "Me",
    summary: {
      workoutsCompleted: "3",
      frequentExercise: "Bicep Curls",
    },
    challenge: "Work out 5 days",
    recentWorkouts: ["Bicep Curls", "Shoulder Shrugs"],
  });
});

module.exports = router;
