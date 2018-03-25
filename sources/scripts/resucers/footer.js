import {
    NAME_CHANGED,
    EMAIL_CHANGED,
    MESSAGE_CHANGED,
} from '../constants/constants'

let initialState = {
    message: {
        name: '',
        email: '',
        message: '',
    }
};

const footer = (state = initialState, action) => {
    switch (action.type) {
        case NAME_CHANGED:
            return Object.assign({}, state, {
                message: Object.assign({}, state.message, {
                    name: action.value,
                })
            });
        case EMAIL_CHANGED:
            return Object.assign({}, state, {
                message: Object.assign({}, state.message, {
                    email: action.value,
                })
            });
        case MESSAGE_CHANGED:
            return Object.assign({}, state, {
                message: Object.assign({}, state.message, {
                    message: action.value,
                })
            });
        default:
            return state;
    }
}

export default footer;