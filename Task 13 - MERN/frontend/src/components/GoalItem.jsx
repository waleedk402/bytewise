import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
function GoalItem({goal}) {
  const dispatch=useDispatch()
  const titleStyle={fontSize:"15px",color:"darkGray"}
  const closeStyle={
    borderRadius:"50%",
    backgroundColor:"black",
    color:"white",
    padding:"7px",
    fontWeight:"bold"
  }
  return (
    <div className="goal">
      <div><p style={titleStyle}>{new Date(goal.createdAt).toLocaleString("en-us")}</p></div>
      <h5>{goal.text}</h5>
      <button className="close" style={closeStyle} onClick={()=>dispatch(deleteGoal(goal._id))}>X</button>
    </div>
  );
}

export default GoalItem;
