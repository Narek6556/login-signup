import Title from "../components/Title";
import {Link} from 'react-router-dom';
import TableItem from "../components/TableItem";
import Button from "../components/Button";
import {addUser} from "../store/actions/usersListAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../App.css';


function UsersPage() {
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

    return (
        <div>
            <div className="button-area-home button-home">
                <Link to="/">
                    <Button text="Home"/>
                </Link>
            </div>
            <Title text="Users Page"/>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>first name</th>
                        <th>last name</th>
                        <th>gender</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <TableItem key = {user.id} {...user}/>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsersPage;