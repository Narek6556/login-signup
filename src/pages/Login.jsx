import { Link, withRouter } from "react-router-dom";
import Title from "../components/Title";
import '../App.css';
import Button from "../components/Button";
import {setProfile} from "../store/actions/profileActions";
import {useDispatch} from "react-redux";
import  {useState} from "react";
import { Field, Formik, Form, useFormik} from "formik";


function Login(props) {
    const [incorrectMessage, setIncorrectMessage] = useState(false);
    const dispatch = useDispatch();

    // const onChangeHandler = (event) => {
    //     const {value, name} = event.target;
    //     if (name === "email")
    //         setEmail(value);
    //     else if (name === "password")
    //         setPassword(value);
    // }

    const onSubmitHandler = async (values) => {
        const {email, password} = values
        const url = `http://localhost:3001/users?email=${email}&password=${password}`;
        // const url = `http://localhost:3001/users`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const res = await fetch(url, options)
        const data = await res.json()
        if (data.length > 0) {
            localStorage.setItem('id', data[0].id);
            props.history.push("/home-page");
            dispatch(setProfile(data[0]));
        } else {
            setIncorrectMessage("Entered incorrect email and/or password");
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: onSubmitHandler,
    });
    return (
        <div className="login">
            <div className="button-home button-area-home">
                <Link to="/">
                    <Button text="Home"/>
                </Link>
            </div>
            <Title text="Login"/>
            <div className="form-center">
                    <form className="input-container" onSubmit = {formik.handleSubmit}>
                        <label>E-Mail</label>
                        <input 
                                type = "e-mail" 
                                name="email" 
                                onChange = {formik.handleChange}
                                placeholder = "Enter your e-mail"
                        />
                        <label>Password</label>
                        <input 
                                type="password" 
                                name="password" 
                                onChange = {formik.handleChange} 
                                placeholder = "Enter your password"
                        />
                        <p>{incorrectMessage}</p>
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
        //{//</div><form className="input-container" onSubmit = {/>/formik.handleChange}>
                //     <label>E-Mail</label>
                //     <input 
                //         type="e-mail" 
                //         name="email" 
                //         onChange={formik.handleChange}
                //     />
                //     <label>Password</label>
                //     <input 
                //         type="password" 
                //         name="password" 
                //         onChange={formik.handleChange}
                //     />
                //     <p>{incorrectMessage}</p>
                //     <div className="button-area">
                //         <Link to="/signup">
                //             <Button text="SignUp"/>
                //         </Link> 
                //     </div>
                //     <div className="button-area">
                //         <Button type = "submit" text="Login"/>
                //     </div>
                // </form>}
         //   </div>
            
        //</div>
    );
}

export default withRouter(Login);