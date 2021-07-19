import { usersListTypes } from "../types/usersListTypes";

export const deleteUser = {
    type: usersListTypes.DELETE_USER,
}

export const addUser = (users) => {
    return ({
    type: usersListTypes.ADD_USER,
    payload: users,
})};