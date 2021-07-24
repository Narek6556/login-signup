import Title from "../components/Title";
import {Link} from 'react-router-dom';
import TableItem from "../components/TableItem";
import Button from "../components/Button";
import {addUser} from "../store/actions/usersListAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../App.css';
import Select from "react-select";
import { useFormik} from "formik";
import * as yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function AddEventPage() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);

    useEffect(() => {
        let url = "http://localhost:3001/users";
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
                dispatch(addUser(data));
            }) 
    }, []);

    const options = []

    users.map(user => {
        let labeledUser = {
            label: user.first_name,
            value: user.id
        }
        options.push(labeledUser);
    })

    const eventValidationSchema = yup.object().shape({
        title: yup
                .string()
                .max(50, "to long title")
                .required("this filed is required"),
        description: yup
                        .string()
                        .max(200, "to long title"),
        age: yup
                .string()
                .required("this filed is required"),
        guests: yup
                .array()
                .max(3)
                .of(
                    yup.number().min(0)
                ),
    });

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const img = document.createElement("img");
        const imgField = document.getElementsByClassName("img-field");
        const promises = files.map(
          (file) =>
            new Promise((res) => {
              const reader = new FileReader();
              reader.readAsArrayBuffer(file);
              reader.onloadend = async () => {
                const blob = new Blob([reader.result]);
                const urlCreator = window.URL || window.webkitURL;
                file.blob_url = urlCreator.createObjectURL(blob);
                res();
              };
            })
        );
        Promise.all(promises).then(() => {
            imgField[0].appendChild(img);
            img.src = files[0].blob_url;
            img.classList.add("img-cont");
          console.log(files);
        });
      };

    const addEvent = async (values) => {
        console.log(values);
        const {title, description, age, isPrivate, guests, startDate, endDate} = values;
        const url = 'http://localhost:3001/events';
        const body = JSON.stringify({
            title, 
            description,
            age, 
            isPrivate, 
            guests, 
            startDate,
            endDate,
        })
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body,
        }
        fetch(url, options);
    }

    const onSelectChange = (users) => {
        formik.setFieldValue("guests", users.map(user => user.value));
    }

    const onDatePickChange = (name, value) => {
        formik.setFieldValue([name], value);
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            guests: [],
            isPrivate: false,
            startDate: new Date(),
            endDate: new Date(),
        },
        onSubmit: addEvent,
        validationSchema: eventValidationSchema,
    });

    return (
        <div>
            <div className="button-area-home button-home">
                <Link to="/">
                    <Button text="Home"/>
                </Link>
            </div>
            <Title text="Add Event Page"/>
            <div className="form-center">
                <form className="input-container" onSubmit={formik.handleSubmit}>
                    <label>Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={formik.handleChange}
                    />
                    <label>Description</label>
                    <textarea 
                        type="text" 
                        name="description" 
                        onChange={formik.handleChange}
                    />
                    <label>Age</label>
                    <div onChange={formik.handleChange}>
                        <input 
                            type = "radio"
                            name = "age"
                            value = "0"
                        />
                        0 - 12
                        <br />
                        <input 
                            type = "radio"
                            name = "age"
                            value = "1"
                        />
                        12 - 18
                        <br />
                        <input 
                            type = "radio"
                            name = "age"
                            value = "2"
                        />
                        18+
                    </div>
                    <label>Private</label>
                    <input
                        type = "checkbox"
                        onChange= { formik.handleChange }
                        name = "isPrivate"
                    />
                    <label>Guests</label>
                    <Select 
                        options = {options}
                        isMulti
                        name = "guests"
                        onChange = { onSelectChange }
                    />
                    <label>Date</label>
                    <div className = "date">
                        <DatePicker
                            name="startDate" 
                            selected={formik.values.startDate}
                            selectsStart
                            startDate={formik.values.startDate}
                            endDate={formik.values.endDate}
                            onChange={(value) => onDatePickChange("startDate", value)}
                            minDate={formik.values.startDate}
                        />
                        <DatePicker
                            name="endDate" 
                            selected={formik.values.endDate}
                            selectsEnd
                            startDate={formik.values.startDate}
                            endDate={formik.values.endDate}
                            minDate={formik.values.startDate}
                            onChange={(value) => onDatePickChange("endDate", value)}
                        />
                    </div>
                    
                    <div className = "img-field">
                        <input 
                            type = "file"
                            onChange = {handleFileChange}
                        />
                    </div>
                    
                    <div className="button-area">
                        <Button type="submit" text="ADD EVENT"/>
                    </div>
                </form>
            </div>
        </div>
    );
}