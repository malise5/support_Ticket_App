//@desc Get goals
// @route GET/api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({
        message: "Get Goals",
    });
};

//@desc Get goals
// @route GET/api/goals/id
// @access Private
const getOneGoal = (req, res) => {
    res.status(200).json({
        message: `Get a specific goal ${req.params.id}`,
    });
};

//@desc set goal
// @route POST/api/goals
// @access Private
const setGaol = (req, res) => {
    res.status(201).json({
        message: "Set Goals",
    });
};

//@desc Update goals
// @route PUT/api/goals/:id
// @access Private
const updateGaol = (req, res) => {
    res.status(201).json({
        message: `Update a goal ${req.params.id}`,
    });
};

//@desc Delete goals
// @route DELETE/api/goals/:id
// @access Private
const deleteGaol = (req, res) => {
    res.status(200).json({
        message: `Delete a goal ${req.params.id}`,
    });
};

module.exports = {
    getGoals,
    getOneGoal,
    setGaol,
    updateGaol,
    deleteGaol,
};
