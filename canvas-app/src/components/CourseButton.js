import React from "react";

const Button = props => {
    const btnEnableDisable = !props.isDisabled ? "btn-enable" : "btn-disabled";

    return (
        <button
            id={props.id}
            className={`btn ${btnEnableDisable}`}
            onClick={props.clickHandler}
            type={props.type}
            disabled={props.isDisabled}
        >
            {props.value}
        </button>
    );
};

Button.defaultProps = {
    type: "button",

    disabled: false
};

export default function ButtonEXP() {
    const insertClickHandler = e => {
        alert("Clicked on insert Button");
    };

    const saveClickHandler = e => {
        alert("Clicked on save Button");
    };

    return (
        <div>
            <Button
                id={"btnInsert"}
                type={"Submit"}
                value={"Insert"}
                isDisabled={true}
                clickHandler={insertClickHandler}
            />

            <Button
                id={"btnSave"}
                type={"Submit"}
                value={"Save"}
                isDisabled={false}
                clickHandler={saveClickHandler}
            />
        </div>
    );
}