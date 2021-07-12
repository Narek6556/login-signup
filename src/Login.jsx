import { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import './App.css';
import Button from "./Button";

class Login extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="login">
                <div className="button-area button-area-home">
                    <Link to="/">
                        <Button text="Home"/>
                    </Link>
                </div>
                <Title text="Login"/>
                <div className="form-center">
                    <form className="input-container">
                        <label>E-Mail</label>
                        <input type="e-mail"/>
                        <label>Password</label>
                        <input type="password"/>
                        <div className="button-area">
                            <Button text="Login"/>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Login;