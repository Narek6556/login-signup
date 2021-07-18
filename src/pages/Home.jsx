import { Component } from "react";
import Button from "../components/Button";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home">
                <div className="content">
                    <Title text="Home"/>
                    <div className="button-area-home">
                        <Link to="/login">
                            <Button text="Login"/>
                        </Link>
                        <Link to="/signup">
                            <Button text="SignUp"/>
                        </Link> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;