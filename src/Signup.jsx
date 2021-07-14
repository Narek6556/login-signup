import { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import Title from "./Title";
import './App.css';
import Button from "./Button";

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    addUser = async (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;
        const url = 'http://localhost:3001/users';
        const body = JSON.stringify({
            username,
            email,
            password,
        })
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body,
        }
        fetch(url, options);
        this.props.history.push("/login");
    }

    onChangeHandler = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]: value});
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
                    <form className="input-container" onSubmit={this.addUser}>
                        <label>E-Mail</label>
                        <input 
                            type="e-mail" 
                            name="email" 
                            onChange={this.onChangeHandler}
                        />
                        <label>Username</label>
                        <input 
                            type="username" 
                            name="username" 
                            onChange={this.onChangeHandler}
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={this.onChangeHandler}
                        />
                        <div className="button-area">
                            <Button type="submit" text="Sign Up"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);