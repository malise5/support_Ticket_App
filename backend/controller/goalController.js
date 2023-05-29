const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

//======================OPTION 1 uSING eXPRESS aSYNC hANDLER================================
//@desc Get goals
// @route GET/api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Get Goals",
    });
});

//@desc Get goals
// @route GET/api/goals/id
// @access Private
const getOneGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Get a specific goal ${req.params.id}`,
    });
});

//@desc set goal
// @route POST/api/goals
// @access Private
const setGaol = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("fill the text field");
    }
    res.status(201).json({
        message: "Set Goals",
    });
});

//@desc Update goals
// @route PUT/api/goals/:id
// @access Private
const updateGaol = asyncHandler(async (req, res) => {
    res.status(201).json({
        message: `Update a goal ${req.params.id}`,
    });
});

//@desc Delete goals
// @route DELETE/api/goals/:id
// @access Private
const deleteGaol = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete a goal ${req.params.id}`,
    });
});

module.exports = {
    getGoals,
    getOneGoal,
    setGaol,
    updateGaol,
    deleteGaol,
};

//======================OPTION 2 uSING TRY-CATCH Async================================
// //@desc Get goals
// // @route GET/api/goals
// // @access Private
// const getGoals = async (req, res) => {
//     try {
//       res.status(200).json({
//         message: "Get Goals",
//       });
//     } catch (error) {
//       res.status(500).json({
//         error: "Server Error",
//       });
//     }
//   };

//   //@desc Get goals
//   // @route GET/api/goals/id
//   // @access Private
//   const getOneGoal = async (req, res) => {
//     try {
//       res.status(200).json({
//         message: `Get a specific goal ${req.params.id}`,
//       });
//     } catch (error) {
//       res.status(500).json({
//         error: "Server Error",
//       });
//     }
//   };

//   //@desc set goal
//   // @route POST/api/goals
//   // @access Private
//   const setGaol = async (req, res) => {
//     try {
//       if (!req.body.text) {
//         res.status(400);
//         throw new Error("fill the text field");
//       }
//       res.status(201).json({
//         message: "Set Goals",
//       });
//     } catch (error) {
//       res.status(500).json({
//         error: "Server Error",
//       });
//     }
//   };

//   //@desc Update goals
//   // @route PUT/api/goals/:id
//   // @access Private
//   const updateGaol = async (req, res) => {
//     try {
//       res.status(201).json({
//         message: `Update a goal ${req.params.id}`,
//       });
//     } catch (error) {
//       res.status(500).json({
//         error: "Server Error",
//       });
//     }
//   };

//   //@desc Delete goals
//   // @route DELETE/api/goals/:id
//   // @access Private
//   const deleteGaol = async (req, res) => {
//     try {
//       res.status(200).json({
//         message: `Delete a goal ${req.params.id}`,
//       });
//     } catch (error) {
//       res.status(500).json({
//         error: "Server Error",
//       });
//     }
//   };

//   module.exports = {
//     getGoals,
//     getOneGoal,
//     setGaol,
//     updateGaol,
//     deleteGaol,
//   };
