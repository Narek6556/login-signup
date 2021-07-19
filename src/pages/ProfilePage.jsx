import { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";
import {connect} from "react-redux";
import {setProfile} from "../store/actions/profileActions";

class ProfilePage extends Component {

    componentDidMount() {
        let url = `http://localhost:3001/users?id=${localStorage.getItem('id')}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        fetch(url, options)
            .then(data => {
                return data.json();
            }).then(data => {
                this.props.setProfile(data[0]);
            }) 
    }

    render() {
        const {first_name, last_name} = this.props.profile
        return (
            <div>
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
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {profile} = state;
    return {
        profile,
    }
}

const mapDispatchToProps = {
    setProfile,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);