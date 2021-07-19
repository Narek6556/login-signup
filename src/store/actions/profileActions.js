import { profileTypes } from "../types/profileTypes";

export const editProfile = {
    type: profileTypes.EDIT_PROFILE,
}

export const setProfile = (user) => ({
    type: profileTypes.SET_PROFILE,
    payload: user
})