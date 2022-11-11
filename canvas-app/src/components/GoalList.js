import React from "react";
import Goal from "./Goal";

function GoalList({ goals, removeGoal, updateCheckpoints }) {
    return (
        <div style={{ display: "flex", width: "50%" }}>
            <ul style={{ listStyleType: "none", flexGrow: "1" }}>
                {goals.map((goal) => {
                    return (
                        <Goal
                            key={goal.id}
                            goal={goal}
                            removeGoal={removeGoal}
                            updateCheckpoints={updateCheckpoints}
                            style={{ flexGrow: "1" }}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default GoalList;