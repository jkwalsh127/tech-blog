const signupUsername = document.querySelector('#username-signup');
const signupPassword = document.querySelector('#password-signup');
const signupForm = document.querySelector('#signup-form')

async function signupFormHandler(event) {
  event.preventDefault();
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ username: signupUsername.value.trim(), password: signupPassword.value.trim() }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

signupForm.addEventListener('submit', signupFormHandler);