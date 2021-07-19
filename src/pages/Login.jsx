import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Title from "../components/Title";
import '../App.css';
import Button from "../components/Button";
import {getProfile} from "../store/actions/profileActions";
import {connect} from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isIncorect: ''
        }
    }



    onChangeHandler = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]: value});
    }

    onSubmitHandler = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        const url = `http://localhost:3001/users?email=${email}&password=${password}`;
        // const url = `http://localhost:3001/users`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        let res = await fetch(url, options)
        let data = await res.json()
        if (data.length > 0) {
            localStorage.setItem('id', data[0].id);
            this.props.history.push("/home-page");
            this.props.getProfile(data[0]);
        } else {
            this.setState({isIncorect: "Entered incorrect email and/or password"});
        }
    }

    render() {
        return (
            <div className="login">
                <div className="button-home button-area-home">
                    <Link to="/">
                        <Button text="Home"/>
                    </Link>
                </div>
                <Title text="Login"/>
                <div className="form-center">
                    <form className="input-container" onSubmit = {this.onSubmitHandler}>
                        <label>E-Mail</label>
                        <input 
                            type="e-mail" 
                            name="email" 
                            onChange={this.onChangeHandler}
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={this.onChangeHandler}
                        />
                        <p>{this.state.isIncorect}</p>
                        <div className="button-area">
                            <Link to="/signup">
                                <Button text="SignUp"/>
                            </Link> 
                        </div>
                        <div className="button-area">
                            <Button type = "submit" text="Login"/>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

const mapDispatchToProps = {
    getProfile
}


export default connect(null, mapDispatchToProps)(withRouter(Login));