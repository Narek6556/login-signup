import { Component } from "react";
import './App.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            type, 
            onClick, 
            text
        } = this.props;
        
        return (
            <div className="button-cont">
                <button 
                    type={type} 
                    onClick={onClick} 
                    className="link"
                >
                    {text}
                </button>
            </div>
        );
    }
}

export default Button;