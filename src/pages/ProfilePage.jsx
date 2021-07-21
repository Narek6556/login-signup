import { Link } from "react-router-dom";
import Button from "../components/Button";
import Title from "../components/Title";
import {setProfile} from "../store/actions/profileActions";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";


function ProfilePage() {
    const first_name = useSelector(state => state.profile.first_name);
    const last_name = useSelector(state => state.profile.last_name);
    const dispatch = useDispatch();

    useEffect(() => {
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
                dispatch(setProfile(data[0]));
            }) 
    }, []);
    return (
        <div>
            <div className="profile">
                <div className="button-home button-area-home">
                    <Link to="/">
                        <Button text="Home"/>
                    </Link>
                </div>
                <Title text="Profile Page"/>
                <div className = "user-info-container">
                    <div className="user-info">
                        <div className="user-img">
                    
                        </div>
                        <h2>{first_name}    {last_name}</h2>
                    </div>   
                </div>
                <div className = "button-area"> 
                    <Link to="/edit-page">
                        <Button text="EDIT"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;