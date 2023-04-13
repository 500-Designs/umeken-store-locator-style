window.onload = function () {
    const mapSearch = document.querySelector('#div_search');
    if (mapSearch) {
        modSideBar();
    } else {
        console.warn('mapSearch not found');
    }
};

function modSideBar() {
    console.debug('init modSideBar');
    const storeFilter = document.querySelector('#div_search > div.search > div:nth-child(2)');
    storeFilter.style.display = 'none';
    const renderedMap = document.querySelector('[aria-label="Map"]');
    const canvas = document.querySelector('#map_canvas');
    const storeList = document.querySelector('#div_store_list');

    if (storeList && document.body.contains(storeList)) {
        const observer = new MutationObserver(() => {
            const display = getComputedStyle(storeList).display;
            if (display === 'none') {
                console.debug('#div_store_list is set to display none');
            } else if (display === 'block') {
                console.debug('#div_store_list is set to display block');
                canvas.classList.add('with-sidebar');
                storeFilter.style.display = 'block';
            }
        });
        observer.observe(storeList, { attributes: true });
    } else {
        console.warn('#div_store_list not found or not added to the DOM');
    }
}



