import Button from "../components/Button";
import {Link} from "react-router-dom";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import {useState} from "react";

function EditUserDataPage(props) {
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const profile = useSelector(state => state.profile)

    const onChangeHandler = (event) => {
        const {value, name} = event.target;
        if (name === "first_name")
            setFirst_name(value);
        else if (name === "last_name")
            setLast_name(value);
    }

    const editData = (event) => {
        event.preventDefault();
        const url = `http://localhost:3001/users/${localStorage.getItem("id")}`;
        const body = JSON.stringify({
            first_name,
            last_name,
            email: profile.email,
            password: profile.password,
        })
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        }
        fetch(url, options).then(() => {
            props.history.push("/users-page");
        })
    }

    return (
        <div>
            <div className="button-home button-area-home">
                <Link to="/">
                    <Button text="Home"/>
                </Link>
            </div>
            <Title text="EDIT PAGE"/>
            <div className="form-center">
                <form className="input-container" onSubmit={editData}>
                    <label>First name</label>
                    <input 
                        type="first_name" 
                        name="first_name" 
                        onChange={onChangeHandler}
                    />
                    <label>Last name</label>
                    <input 
                        type="last_name" 
                        name="last_name" 
                        onChange={onChangeHandler}
                    />
                    <div className="button-area">
                        <Button type="submit" text="EDIT"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditUserDataPage;