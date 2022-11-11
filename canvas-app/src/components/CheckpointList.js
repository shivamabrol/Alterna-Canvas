import React from "react";
import Checkpoint from "./Checkpoint";

function CheckpointList({ removeCheckpoint, toggleCheckpointComplete, checkpoints }) {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
        >
            <h3
                style={{
                    margin: "0 0 1em 0",
                    fontSize: "10px + 2vmin",
                    fontWeight: "normal",
                }}
            >
                Checkpoints
            </h3>
            <ul style={{
                listStyleType: "none",
                paddingInlineStart: "0"
            }}>
                {checkpoints.map((checkpoint) => {
                    return (
                        <Checkpoint
                            key={checkpoint.id}
                            checkpoint={checkpoint}
                            toggleCheckpointComplete={toggleCheckpointComplete}
                            removeCheckpoint={removeCheckpoint}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
export default CheckpointList;