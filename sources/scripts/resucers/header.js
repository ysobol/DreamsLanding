import {
    SHOW_MENU,
    HIDE_MENU,
} from '../constants/constants'

let initialState = {
    showMenu: false,
};

const header = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return Object.assign({}, state, {
                showMenu: !state.showMenu,
            });
        case HIDE_MENU:
            return Object.assign({}, state, {
                showMenu: state.showMenu,
            });
        default:
            return state;
    }
}
export default header;