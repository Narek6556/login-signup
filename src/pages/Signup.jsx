import { Link, withRouter } from "react-router-dom";
import Title from "../components/Title";
import '../App.css';
import Button from "../components/Button";
import  {useState} from "react";


function SignUp(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');

    const onChangeHandler = (event) => {
        const {value, name} = event.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "first_name":
                setFirst_name(value);
                break;
            case "last_name":
                setLast_name(value);
                break;
            default:
                break;
        }
    }

    const addUser = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3001/users';
        const body = JSON.stringify({
            first_name,
            last_name,
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
        props.history.push("/login");
    }

    return (
        <div className="signup">
            <div className="button-home button-area-home">
                <Link to="/">
                    <Button text="Home"/>
                </Link>
            </div>
            <Title text="SignUp"/>
            <div className="form-center">
                <form className="input-container" onSubmit={addUser}>
                    <label>E-Mail</label>
                    <input 
                        type="e-mail" 
                        name="email" 
                        onChange={onChangeHandler}
                    />
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
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={onChangeHandler}
                    />
                    <div className="button-area">
                        <Button type="submit" text="Sign Up"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(SignUp);