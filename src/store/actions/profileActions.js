import { profileTypes } from "../types/profileTypes";

export const editProfile = {
    type: profileTypes.EDIT_PROFILE,
}

export const getProfile = (user) => ({
    type: profileTypes.GET_PROFILE,
    payload: user
})