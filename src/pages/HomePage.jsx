import Button from "../components/Button";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import '../App.css';


function HomePage() {
    return (
        <div className="home">
            <div className="content">
                <Title text="Home Page"/>
                <div className="button-area-home button-area-home-page">
                    <Link to="/users-page">
                        <Button text="Users List"/>
                    </Link>
                    <Link to="/profile-page">
                        <Button text="Profile Page"/>
                    </Link> 
                    <Link to="/add-event-page">
                        <Button text="Add Event"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;