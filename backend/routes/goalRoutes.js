const express = require("express");
const router = express.Router();
const {
    getGoals,
    getOneGoal,
    setGaol,
    updateGaol,
    deleteGoal,
} = require("../controller/goalController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGaol);
router
    .route("/:id")
    .get(getOneGoal)
    .put(protect, updateGaol)
    .delete(protect, deleteGoal);

module.exports = router;
