import React from "react";
import CheckpointForm from "./CheckpointForm";
import CheckpointList from "./CheckpointList";

function Goal({ goal, removeGoal, updateCheckpoints }) {

    let checkpoints = [...goal.checkpoints];

    let completeCheckpoints = checkpoints.filter(checkpoint => checkpoint.complete).length;
    let totalCheckpoints = checkpoints.length;

    const checkpointId = (checkpoints[checkpoints.length - 1]?.id + 1) || 1;

    function handleButtonClick() {
        removeGoal(goal.id);
    }

    function addCheckpoint(newCheckpoint) {
        console.log('addCheckpoint', checkpoints);
        const updatedCheckpoints = [...checkpoints, newCheckpoint];
        console.log(updatedCheckpoints);
        updateCheckpoints(goal.id, updatedCheckpoints);
    }

    function removeCheckpoint(checkpointId) {
        const updatedCheckpoints = goal.checkpoints.filter(checkpoint =>
            checkpoint.id !== checkpointId);
        updateCheckpoints(goal.id, updatedCheckpoints);
    }

    function toggleCheckpointComplete(checkpointId) {
        const updatedCheckpoints = goal.checkpoints.map((checkpoint) => {
            if (checkpoint.id === checkpointId) {
                checkpoint.complete = !checkpoint.complete;
            }
            return checkpoint;
        });
        updateCheckpoints(goal.id, updatedCheckpoints)
    }

    return (
        <li>
            <div
                style={{
                    display: "flex",
                    padding: "1rem 0 1rem 0",
                    margin: "1rem 0 1rem 0",
                    backgroundColor: "blueviolet",
                    outlineStyle: "solid",
                    outlineColor: "orange",
                }}
            >
                <div style={{ flexBasis: "10%" }}>
                    {`${completeCheckpoints} / ${totalCheckpoints}`}
                </div>

                <div
                    style={{
                        color: "white",
                        flexBasis: "40%",
                        textAlign: "left",
                        textDecoration: goal.complete ? "line-through" : null,
                    }}
                >
                    {goal.value}
                </div>
                <div
                    style={{
                        flexBasis: "40%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CheckpointList
                        checkpoints={checkpoints}
                        addCheckpoint={addCheckpoint}
                        removeCheckpoint={removeCheckpoint}
                        toggleCheckpointComplete={toggleCheckpointComplete}
                    />
                    <CheckpointForm addCheckpoint={addCheckpoint} checkpointId={checkpointId} />
                </div>
                <div style={{ flexGrow: "10%" }}>
                    <button onClick={handleButtonClick}>X</button>
                </div>
            </div>
        </li>
    );
}

export default Goal;