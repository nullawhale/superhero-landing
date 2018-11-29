import React from 'react'
import ReactDOM from "react-dom"

function Welcome(props) {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(<Welcome name='Nikita' />, document.getElementById('root'));
}
setInterval(tick, 1000);
