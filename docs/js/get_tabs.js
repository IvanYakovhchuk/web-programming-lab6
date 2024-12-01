async function fetchTabs() {
    try {
        const response = await fetch('http://localhost:8080/api/tabs');
        const tabs = await response.json();
        generateTabs(tabs);
    } catch (error) {
        console.error('Помилка при отриманні вкладок:', error);
    }
}

function generateTabs(tabs) {
    const tabsList = document.getElementById('tabs-list');
    tabsList.innerHTML = '';

    if (tabs.length > 0) {
        tabs.forEach((tab, index) => {
            const li = document.createElement('li');
            li.classList.add('nav-item');

            const div = document.createElement('div');
            div.classList.add('nav-link');
            div.textContent = tab;

            if (index === 0) {
                div.classList.add('active');
            }

            li.appendChild(div);
            tabsList.appendChild(li);

            div.addEventListener('click', () => setActiveTab(div));
        });
    }
}

function setActiveTab(clickedTab) {
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    clickedTab.classList.add('active');
}

window.onload = fetchTabs;