import { profileTypes } from "../types/profileTypes";

export const editProfile = (newUser) => ({
    type: profileTypes.EDIT_PROFILE,
    payload: newUser,
})

export const setProfile = (user) => ({
    type: profileTypes.SET_PROFILE,
    payload: user
})