const handleSubmit = (e) => {
  e.preventDefault();
  log.textContent =
    parseInt(document.getElementById('text_01').value) +
    parseInt(document.getElementById('text_02').value);
};

const form = document.getElementById('form');
const log = document.getElementById('log');

form.addEventListener('submit', handleSubmit);
