const form = document.getElementById('file-upload-form');
const fileInput = document.getElementById('file-input');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('file', fileInput.files[0]);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    message.innerHTML = data.message;
    fileInput.value = '';
  })
  .catch(err => {
    message.innerHTML = err.message;
    fileInput.value = '';
  });
});
