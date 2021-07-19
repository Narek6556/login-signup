import { usersListTypes } from "../types/usersListTypes";

const initialState = [];

function usersListReducer(state = initialState, action) {
    switch (action.type) {
        case usersListTypes.DELETE_USER:
            return {
                ...state,
            }
        case usersListTypes.ADD_USER:
            return action.payload;
        default:
            return state;
    }
}

export default usersListReducer;