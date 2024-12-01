function generateTabs() {
    const tabsCount = document.getElementById('tabs-count').value;
    const tabFieldsContainer = document.getElementById('tab-fields');
    tabFieldsContainer.innerHTML = '';

    if (tabsCount >= 2 && tabsCount <= 5) {
        for (let i = 1; i <= tabsCount; i++) {
            const label = document.createElement('label');
            label.setAttribute('for', `tab-${i}`);
            label.innerText = `Назва вкладки ${i}:`;
            label.style.margin= '1vw';

            const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('id', `tab-${i}`);
            input.setAttribute('name', `tab-${i}`);
            input.setAttribute('placeholder', `Введіть назву вкладки ${i}`);
            input.style.margin = '1vw';

            tabFieldsContainer.appendChild(label);
            tabFieldsContainer.appendChild(input);
            tabFieldsContainer.appendChild(document.createElement('br'));
        }
    }
}