import React, { Component } from "react";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function ToDo() {
    return (
        <div>
            <Welcome name="Erin" />
            <Welcome name="Shivam" />
            <Welcome name="Christian" />
        </div>
    );
}
export default ToDo;