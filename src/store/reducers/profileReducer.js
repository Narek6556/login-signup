import {profileTypes} from '../types/profileTypes.js';

const initialState = {
    first_name: '',
    last_name: '',
    email: '',
}

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case profileTypes.SET_PROFILE:
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email,
                password: action.payload.password, 
            }
        case profileTypes.EDIT_PROFILE:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default profileReducer;