import { Component } from "react";
import Title from "../components/Title";
import {Link} from 'react-router-dom';
import TableItem from "../components/TableItem";
import Button from "../components/Button";
import {connect} from "react-redux";
import {addUser} from "../store/actions/usersListAction";
import '../App.css';

class UsersPage extends Component {

    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
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
                this.props.addUser(data);
            }) 
    }

    render() {
        return (
            <>
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
                            <th>second name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map(user => <TableItem key = {user.id} {...user}/>)
                        }
                    </tbody>
                </table>
            </>
        );
    }
}

function mapStateToProps(state) {
    const {users} = state;
    return {
        users
    }
}

const mapDispatchToProps = {
    addUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);