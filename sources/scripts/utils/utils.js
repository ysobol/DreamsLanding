const buildAboutItem = (date, title, url) => [
    "<div class='about-item'>",
    "<div class='about-item-container'>",
    "<h3 class='title-sub title-sub-bold'>",
    date,
    "</h3>",
    "<h3 class='title-sub title-sub-bold label-title'>",
    title,
    "</h3>",
    "<div class='about-item-description'>",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble",
    "</div>",
    "</div>",
    "<div class='about-item-img-container'>",
    "<img class='coreImage'src=",
    url,
    " alt='enter the dark days'></div>",
    "</div>"
].join('');


export const loadMoreAboutItems = (aboutContainer, dataCollection, isLoading) => {
    const result = [
        aboutContainer.innerHTML
    ];

    if (dataCollection && dataCollection.data && !isLoading) {

        dataCollection.data.map(item => {
            result.push(buildAboutItem(item.date, item.title, './styles/images/' + item.imgName));
        });
    }

    return result.join('');
}

export const manageLoading = (isLoading, classList) => {
    let newClassList = classList;

    if (isLoading) {

        newClassList.add('showSpinner');
        newClassList.remove('hideSpinner');

    } else {

        newClassList.add('hideSpinner');
        newClassList.remove('showSpinner');
    }

    return newClassList
}

export const getMenuClasses = (showMenu, classList) => {
    const isHiddentClass = 'isHidden';
    const newClassList = classList

    if (showMenu) {
        newClassList.remove(isHiddentClass);
    } else {
        newClassList.add(isHiddentClass);
    }

    return newClassList;
};