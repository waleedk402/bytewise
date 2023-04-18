import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [remainder, setRemainder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAddTask({ text, day, remainder });
    setText("");
    setDay("");
    setRemainder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          checked={remainder}
          onChange={(e) => setRemainder(e.currentTarget.checked)}
          value={remainder}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
