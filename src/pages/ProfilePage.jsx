import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class ProfilePage extends Component {

    render() {
        const {first_name, last_name} = this.props.profile
        return (
            <>
                <div className="profile">
                    <div className="button-home button-area-home">
                        <Link to="/">
                            <Button text="Home"/>
                        </Link>
                    </div>
                    <Title text="Profile Page"/>
                    <div className = "user-info">
                        <p>first name: {first_name}</p>
                        <p>last name: {last_name}</p>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const {profile} = state;
    return {
        profile,
    }
}

export default connect(mapStateToProps, null)(ProfilePage);