export default (() => {
    const tabsHeader = document.querySelector('.tabs-header');
    const tabContents = document.querySelector('.tab-contents');
    const tabs = tabsHeader.querySelectorAll('li');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabsHeader.querySelector('.active').classList.remove('active');
            tabContents.querySelector('.active').classList.remove('active');
            tab.classList.add('active');
            tabContents.querySelector(`[data-num="${tab.dataset.num}"]`).classList.add('active');
        });
    });
})(); 