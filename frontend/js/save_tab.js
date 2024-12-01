async function saveTab() {
    const tabsCount = document.getElementById('tabs-count').value;
    if (tabsCount < 2 || tabsCount > 5) {
        alert('Будь ласка, виберіть кількість вкладок від 2 до 5');
        return;
    }

    const tabTitles = [];
    for (let i = 1; i <= tabsCount; i++) {
        const tabTitle = document.getElementById(`tab-${i}`).value;
        if (tabTitle.trim() === '') {
            alert(`Будь ласка, введіть назву для вкладки ${i}`);
            return;
        }
        tabTitles.push(tabTitle);
    }

    console.log(JSON.stringify({ tabs: tabTitles }));

    const response = await fetch('http://localhost:8080/api/tabs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tabs: tabTitles })
    });

    if (response.ok) {
        alert('Вкладки збережено!');
        document.getElementById('tabs-count').value = '0';
        document.getElementById('tab-fields').innerHTML = '';
    } else {
        alert('Помилка при збереженні вкладок');
    }
}