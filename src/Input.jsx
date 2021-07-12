import { Component } from "react";
import './App.css';

class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="input-cont">
                <input />
            </div>
        );
    }
}

export default Input;