import React from "react";
import ReactDOM from "react-dom";

const header = <h1>Hello John Hello</h1>; // unlike pure HTML , we can use variables in jsx
const using = (
    <div>
        {header}
    </div>
)
ReactDOM.render(
    using,
    document.getElementById("root")
);