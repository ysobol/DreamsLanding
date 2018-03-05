(function() {
    showMenu = () => {
        const isHiddentClass = 'isHidden';
        const classList = document.querySelector('.nav').classList;

        if (classList.contains(isHiddentClass)) {
            classList.remove(isHiddentClass);
        } else {
            classList.add(isHiddentClass);
        }
    };

}());