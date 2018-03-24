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
            {
                const name = action.value;

                return Object.assign({}, state, {
                    message: {
                        name,
                        email: state.message.email,
                        message: state.message.message,
                    }
                });
            }
        case EMAIL_CHANGED:
            {
                const email = action.value;

                return Object.assign({}, state, {
                    message: {
                        name: state.message.name,
                        email,
                        message: state.message.message,
                    }
                });
            }
        case MESSAGE_CHANGED:
            {
                const message = action.value;

                return Object.assign({}, state, {
                    message: {
                        name: state.message.name,
                        email: state.message.email,
                        message,
                    }
                });
            }
        default:
            return state;
    }
}

export default footer;