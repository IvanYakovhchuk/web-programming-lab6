async function deleteAllItems() {
    try {
      const response = await fetch('https://web-programming-lab6.onrender.com/api/tabs', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        alert('Вкладки видалено успішно!.');
      } else {
        alert('Помилка при видаленні.');
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  }