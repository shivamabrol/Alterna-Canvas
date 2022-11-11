import React, { useState } from "react";
function CheckpointForm({ addCheckpoint, checkpointId }) {
    const [checkpoint, setCheckpoint] = useState({
        id: "",
        value: "",
        complete: false,
    });

    function handleCheckpointInputChange(e) {
        setCheckpoint({ ...checkpoint, value: e.target.value });
        console.log(checkpoint);
    }

    function handleCheckpointSubmit(e) {
        e.preventDefault();
        if (checkpoint.value.trim()) {
            addCheckpoint({ ...checkpoint, id: checkpointId });
            console.log('handled', { ...checkpoint, id: checkpointId });
            setCheckpoint({ ...checkpoint, value: "" });
        }
    }

    return (
        <form onSubmit={handleCheckpointSubmit}>
            <input
                type="text"
                value={checkpoint.value}
                onChange={handleCheckpointInputChange}
            />
            <button type="submit">+</button>
        </form>
    );
}

export default CheckpointForm;