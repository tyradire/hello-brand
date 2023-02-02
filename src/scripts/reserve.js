document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('reserve-form');

  async function sendForm(e) {
    e.preventDefault();
    let formData = new FormData(form);
    let response = await fetch('send.php', {
      method: 'POST',
      body: formData
    })
    if (response.ok) {
      formPreview.innerHTML = '',
      form.reset();
    } else {
      alert('Ошибка');
    }
  }

  form.addEventListener('submit', sendForm);
});