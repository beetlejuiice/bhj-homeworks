const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach(tabsContainer => {
  const tabNavigation = tabsContainer.querySelector('.tab__navigation');
  const tabs = tabsContainer.querySelectorAll('.tab');
  const tabContents = tabsContainer.querySelectorAll('.tab__content');

  function activateTab(index) {
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(content => content.classList.remove('tab__content_active'));
    tabs[index].classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
  }

  tabNavigation.addEventListener('click', (event) => {
    if (event.target.classList.contains('tab')) {
      const tab = event.target;
      const index = Array.from(tabs).indexOf(tab);
      activateTab(index);
    }
  });
});