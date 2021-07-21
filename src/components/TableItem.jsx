function TableItem(props) {
    const { first_name, last_name, email, id } = props;
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
export default TableItem;