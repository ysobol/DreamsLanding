import store from './scripts/resucers/index';
import {
    Name,
    Email,
    Message,
    Text,
    AboutMoreButton,
    AboutContainer,
    Menu,
    MenuButton
} from './scripts/constants/htmlObjects'
import * as aboutCollection from "./data/about.json";
import { onChangeInput, onGetAboutMoreInfo, loading, onShowMenu } from './scripts/actions/actions'
import { loadMoreAboutItems, manageLoading, getMenuClasses } from './scripts/utils/utils'
import header from './scripts/resucers/header';

Name.addEventListener('change', (event) => {
    store.dispatch(onChangeInput(event));
})
Email.addEventListener('change', (event) => {
    store.dispatch(onChangeInput(event));
})
Message.addEventListener('change', (event) => {
    store.dispatch(onChangeInput(event));
});
AboutMoreButton.addEventListener('click', () => {
    store.dispatch(loading());

    window.setTimeout(() => {
        store.dispatch(onGetAboutMoreInfo(aboutCollection))
    }, 5000);
});

MenuButton.addEventListener('click', () => {
    store.dispatch(onShowMenu());
});

store.subscribe(() => {
    const { footer, about, header } = store.getState();
    const { name, email, message } = footer.message;
    const { data, isLoading } = about;

    Name.value = name,
        Email.value = email,
        Message.textContent = message,
        AboutContainer.innerHTML = loadMoreAboutItems(AboutContainer, data, isLoading),
        AboutMoreButton.classList = manageLoading(isLoading, AboutMoreButton.classList),
        Menu.classList = getMenuClasses(header.showMenu, Menu.classList)
})