import {
    GET_ABOUT_MORE_INFO,
    LOADING,
} from '../constants/constants'

let initialState = {
    data: {},
    isLoading: false,
};

const about = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case GET_ABOUT_MORE_INFO:
            return Object.assign({}, state, {
                data: action.about,
                isLoading: false,
            });
        default:
            return state;
    }
}
export default about;