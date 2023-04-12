
window.onload = function () {
    const mapCanvas = document.querySelector('#map_canvas');
    if (mapCanvas) {
      mapCanvas.addEventListener('load', function() {
        console.debug('mapCanvas loaded');
      });
    }
    console.debug('init store locator mods');
    const storeFilter = document.querySelector('#div_search > div.search > div:nth-child(2)');

    const renderedMap = document.querySelector('[aria-label="Map"]');
    renderedMap.classList.add('with-sidebar');
    const storeList = document.querySelector('#div_store_list');
    storeFilter.style.display = 'none';
};

function observeDisplayChanges(element, onShow, onHide) {
    const observer = new MutationObserver(() => {
        const display = getComputedStyle(element).display;
        if (display === 'block') {
            onShow();
        } else if (display === 'none') {
            onHide();
        }
    });

    observer.observe(element, { attributes: true });
}



observeDisplayChanges(storeList, () => {
    console.debug('SHOWN...');
    storeFilter.style.display = 'block';
}, () => {
    console.debug('HIDDEN...');
    storeFilter.style.display = 'none';
});