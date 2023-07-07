import { NAME, MAIL } from '../action/actiontypes';

let initial = { userName: '', value: '' };

const valuesReducer = (state = initial, action) => {
    switch (action.type) {
        case NAME:
            return { ...state, userName: action.payload }
        case MAIL:
            return { ...state, mail: action.payload }
        default:
            return state;
    }
}

export default valuesReducer;