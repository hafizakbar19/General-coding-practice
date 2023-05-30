import React from "react";
import ReactDOM from "react-dom";

// const header = <h1>Hello John Hello</h1>; // unlike pure HTML , we can use variables in jsx
// const using = (
//     <div>
//         {header}
//     </div>
// )
// ReactDOM.render(
//     using,
//     document.getElementById("root")
// );

//class components

class App extends React.Component {  //we can also create this component by functional component this way "const App = () => {" and then same
    render(){
        return(
        <div>
            <h1>Hello</h1>
            <p>Welcome to your first React Class Component</p>
        </div>
        );
    }
    
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);