import React from "react";

function Checkpoint({ checkpoint, toggleCheckpointComplete, removeCheckpoint }) {
    function handleCheckboxClick() {
        toggleCheckpointComplete(checkpoint.id);
    }

    function handleButtonClick() {
        removeCheckpoint(checkpoint.id);
    }

    return (
        <li>
            <div style={{ display: "flex" }}>
                <input type="checkbox" onChange={handleCheckboxClick} checked={checkpoint.complete} />
                <p style={{ margin: "0.25rem 0" }}>{checkpoint.value}</p>
                <button onClick={handleButtonClick}>X</button>
            </div>
        </li >
    );
}

export default Checkpoint;