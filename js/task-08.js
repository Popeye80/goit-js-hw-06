const loginForm = document.querySelector('form.login-form');
const loginFormEmail = document.querySelector('.login-form input[type=email]');
const loginFormPass = document.querySelector('.login-form input[type=password]');

const loginFormSubmitBtn = document.querySelector('.login-form button[type=submit]');

loginForm.addEventListener('submit', onLoginFormSubmitBtnClick);

function onLoginFormSubmitBtnClick(event) {
  event.preventDefault();
  if (loginFormEmail.value === '' || loginFormPass.value === '') {
    alert('Заполните все поля!');
  }

  const userEmail = event.currentTarget.elements.email.value;
  const userPass = event.currentTarget.elements.password.value;

  const userData = {
    userEmail,
    userPass,
  };
  console.log(userData);

  loginForm.reset();
}
