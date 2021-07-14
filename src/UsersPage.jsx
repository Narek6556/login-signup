import { Component } from "react";
import Title from "./Title";
import {Redirect, Link} from 'react-router-dom';
import TableItem from "./TableItem";
import Button from "./Button";
import './App.css';

class UsersPage extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            users: []
        }
    }
    

    componentDidMount() {
        let url = "http://localhost:3001/users";
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        let res = fetch(url, options)
                    .then(data => {
                        // console.log(data);
                        return data.json();
                        // this.setState({user: data.json()});
                    }).then(data => {
                        this.setState({users: data});
                    }) 
        // console.log(res);
        // let data = res.json()
        // console.log(res);
    }

    render() {
        let havId = localStorage.getItem("id");
        if (havId == null) {
            return <Redirect to="/login" />
        }
        
        console.log(this.state.users);
        return (
            <>
                <div className="button-area button-area-home">
                    <Link to="/">
                        <Button text="Home"/>
                    </Link>
                </div>
                <Title text="Users Page"/>
                <table className="users-table">
                    <tr>
                        <th>id</th>
                        <th>user name</th>
                        <th>email</th>
                    </tr>
                    {
                        this.state.users.map(user => <TableItem {...user}/>)
                    }
                </table>
            </>
        );
    }
}

export default UsersPage;