import { Component } from "react";
import '../App.css';

class Title extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="title-container">
                <h2 className="title">{this.props.text}</h2>
            </div>
        );
    }
}

export default Title;