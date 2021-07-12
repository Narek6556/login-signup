import { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import './App.css';
import Button from "./Button";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: '',
                email: '',
                password: ''
            }
        }
    }

    addUser = async (e) => {
        e.preventDefault();
        let url = 'http://localhost:3001/users'
        fetch(url, this.state.data);
    }

    render() {
        return (
            <div className="signup">
                <div className="button-area button-area-home">
                    <Link to="/">
                        <Button text="Home"/>
                    </Link>
                </div>
                <Title text="SignUp"/>
                <div className="form-center">
                    <form className="input-container">
                        <label>E-Mail</label>
                        <input type="e-mail" onChange={(e) => {
                            this.setState({emailValue: e.target.value})
                        }}/>
                        <label>Username</label>
                        <input type="username" onChange={(e) => {
                            this.setState({nameValue: e.target.value})
                        }}/>
                        <label>Password</label>
                        <input type="password" onChange={(e) => {
                            this.setState({passwordValue: e.target.value})
                        }}/>
                        <div className="button-area" onClick={
                            (e) => {this.addUser(e)}
                        }>
                            <Button text="Sign Up"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;