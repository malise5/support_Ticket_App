import React from "react";
import { deleteGoal } from "../features/goals/goalSlice";
import { useDispatch } from "react-redux";

const GoalItem = ({ goal }) => {
    const dispatch = useDispatch();
    console.log(goal);
    const { createdAt, text, _id } = goal.data;
    return (
        <div className="goal">
            <div>{new Date(createdAt).toLocaleString("en-US")}</div>
            <h2>{text}</h2>
            <button onClick={() => dispatch(deleteGoal(_id))} className="close">
                X
            </button>
        </div>
    );
};

export default GoalItem;
