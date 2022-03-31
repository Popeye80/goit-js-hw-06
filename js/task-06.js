const input = document.querySelector('#validation-input');
const inputValueLength = Number(input.dataset.length);

input.addEventListener('input', onInputChange);
input.addEventListener('blur', onInputBlur);

function onInputChange(event) {
  console.log(event.currentTarget.value);
}

function onInputBlur(event) {
  if (event.currentTarget.value.length === inputValueLength) {
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }
    input.classList.add('valid');
  } else {
    if (input.classList.contains('valid')) {
      input.classList.remove('valid');
    }
    input.classList.add('invalid');
  }
}