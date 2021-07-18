import { combineReducers } from "redux";
import profile from './profileReducer';
import users from './usersListReducer';

export const rootReducer = combineReducers({
    profile,
    users,
});