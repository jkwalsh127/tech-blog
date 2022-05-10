const loginUsername = document.querySelector('#username-login');
const loginPassword = document.querySelector('#password-login');
const signinForm = document.querySelector('#login-form')

async function loginFormHandler(event) {
  event.preventDefault();
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ username: loginUsername.value.trim(), password: loginPassword.value.trim() }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

signinForm.addEventListener('submit', loginFormHandler);