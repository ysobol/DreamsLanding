import {
    CLICKEVENT,
    NAME_CHANGED,
    EMAIL_CHANGED,
    MESSAGE_CHANGED,
    NAME_INPUT_ID,
    EMAIL_INPUT_ID,
    MESSAGE_INPUT_ID,
    GET_ABOUT_MORE_INFO,
    LOADING,
    SHOW_MENU
} from '../constants/constants'

export const clickAction = (count = 1, delay = 0) => {
    return {
        type: CLICKEVENT,
        count,
        delay
    };
}

export const onGetAboutMoreInfo = about => {
    return {
        type: GET_ABOUT_MORE_INFO,
        about
    };
}
export const onShowMenu = () => {
    return {
        type: SHOW_MENU
    };
}

export const loading = () => {
    return {
        type: LOADING,
    };
}

export const onChangeInput = (target) => {
    const value = target.currentTarget.value;
    let type = '';

    switch (target.currentTarget.id) {
        case NAME_INPUT_ID:
            type = NAME_CHANGED;
            break;
        case EMAIL_INPUT_ID:
            type = EMAIL_CHANGED;
            break;
        case MESSAGE_INPUT_ID:
            type = MESSAGE_CHANGED;
            break;
        default:
            break;
    }

    return { type, value };
}