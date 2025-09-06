document.querySelectorAll('button[data-theme]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const theme = btn.dataset.theme;

    // Надсилаємо POST-запит на бекенд
    const res = await fetch('/theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ theme })
    });

    const json = await res.json();
    if (json.success) {
      // Міняємо клас body без перезавантаження
      document.body.className = theme;
    }
  });
});