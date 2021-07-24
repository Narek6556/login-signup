import { Link, withRouter } from "react-router-dom";
import Title from "../components/Title";
import '../App.css';
import Button from "../components/Button";
import {useFormik} from "formik";
import Select from "react-select";
import * as yup from 'yup';


function SignUp(props) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [first_name, setFirst_name] = useState('');
    // const [last_name, setLast_name] = useState('');

    const onChangeHandler = (selectedValue) => {
        formik.setFieldValue("gender", selectedValue.value);
    }

    const options = [
        { value: "male", label: "male" },
        { value: 'female', label: 'female' }
    ]

    const addUser = async (values) => {
        const {first_name, last_name, email, password, gender} = values;
        const url = 'http://localhost:3001/users';
        const body = JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            gender,
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

    const userSchema = yup.object().shape({
        first_name: yup
                    .string()
                    .required('Please fill this field'),
        last_name: yup
                    .string()
                    .required('Please fill this field'),
        email: yup
                .string()
                .required('Please fill this field')
                .email('Invalid email'),
        password: yup
                    .string()
                    .required('Please fill this field')
                    .min(2, 'Too Short!')
                    .max(12, 'Too Long!'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            first_name: '',
            last_name: '',
            password: '',
            gender: '',
        },
        validationSchema: userSchema,
        onSubmit: addUser,
    });

    

    return (
        <div className="signup">
            <div className="button-home button-area-home">
                <Link to="/">
                    <Button text="Home"/>
                </Link>
            </div>
            <Title text="SignUp"/>
            <div className="form-center">
                        <form className="input-container" onSubmit={formik.handleSubmit}>
                            <label>E-Mail</label>
                            <input 
                                type="e-mail" 
                                name="email" 
                                onChange={formik.handleChange}
                            />
                            {formik.errors.email && <p>{formik.errors.email}</p>}
                            <label>First name</label>
                            <input 
                                type="first_name" 
                                name="first_name" 
                                onChange={formik.handleChange}
                            />
                            {formik.errors.first_name && <p>{formik.errors.first_name}</p>}
                            <label>Last name</label>
                            <input 
                                type="last_name" 
                                name="last_name" 
                                onChange={formik.handleChange}
                            />
                            {formik.errors.last_name && <p>{formik.errors.last_name}</p>}
                            <label>Gender</label>
                            <Select 
                                options = {options} 
                                onChange={onChangeHandler}
                            />
                            <label>Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                onChange={formik.handleChange}
                            />
                            {formik.errors.password && <p>{formik.errors.password}</p>}
                            <div className="button-area">
                                <Button type="submit" text="Sign Up"/>
                            </div>
                        </form>
            </div>
        </div>
    );
}

export default withRouter(SignUp);