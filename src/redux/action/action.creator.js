import { NAME, MAIL } from "./actiontypes";


export const nameValue = (value) => {
    return {
        type: NAME,
        payload: value
    }
}

export const mailValue = (value) => {
    return {
        type: MAIL,
        payload: value
    }
}