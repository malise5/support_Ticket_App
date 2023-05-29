const express = require("express");
const router = express.Router();
const {
    getGoals,
    getOneGoal,
    setGaol,
    updateGaol,
    deleteGaol,
} = require("../controller/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(setGaol);
router.route("/:id").get(getOneGoal).put(updateGaol).delete(deleteGaol);

module.exports = router;
