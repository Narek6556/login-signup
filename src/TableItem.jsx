import { Component } from "react";

class TableItem extends Component {
    render() {
        const {username, email, id} = this.props;
        return (
            <>
                <tr>
                    <th>{id}</th>
                    <th>{username}</th>
                    <th>{email}</th>
                </tr>
            </>
        );
    }
}

export default TableItem;