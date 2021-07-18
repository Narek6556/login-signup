import { Component } from "react";

class TableItem extends Component {
    render() {
        const { first_name, last_name, email, id } = this.props;
        return (
            <>
                <tr>
                    <th>{id}</th>
                    <th>{first_name}</th>
                    <th>{last_name}</th>
                    <th>{email}</th>
                </tr>
            </>
        );
    }
}

export default TableItem;