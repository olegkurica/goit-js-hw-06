const inputELements = document.querySelector('#validation-input');

inputELements.addEventListener('blur', () => {
  const inputLength = inputELements.value.length;
  const dataLength = inputELements.getAttribute('data-length');
  
  if (inputLength === Number(dataLength)) {
    inputELements.classList.add('valid');
    inputELements.classList.remove('invalid');
  } else {
    inputELements.classList.add('invalid');
    inputELements.classList.remove('valid');
  }
});