import React, { useState } from "react";

function GoalForm({ addGoal, goalId }) {
  const [goal, setGoal] = useState({
    id: "",
    value: "",
    complete: false,
    percent: 0,
    checkpoints: [],
  });

  function handleGoalInputChange(e) {
    setGoal({ ...goal, value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (goal.value.trim()) {
      addGoal({ ...goal, id: goalId });
      setGoal({ ...goal, value: "" });
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={goal.value} onChange={handleGoalInputChange} />
        <button type="submit">+</button>
      </form>
  );
}

export default GoalForm;