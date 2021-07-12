import { Component } from "react";
import './App.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="button-cont">
                <a className="link">{this.props.text}</a>
            </div>
        );
    }
}

export default Button;