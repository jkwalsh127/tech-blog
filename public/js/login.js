const loginUsername = document.querySelector('#username-login');
const loginPassword = document.querySelector('#password-login');
const signupUsername = document.querySelector('#username-signup');
const signupPassword = document.querySelector('#password-signup');
const signinForm = document.querySelector('#login-form')
const signupForm = document.querySelector('#signup-form')

async function loginFormHandler(event) {
  event.preventDefault();
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username: loginUsername.value.trim(), password: loginPassword.value.trim() }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
      document.location.reload();
      document.location.replace('/dashboard');
    } else {
      document.location.replace('/');
    }
};

async function signupFormHandler(event) {
  event.preventDefault();
  const response = await fetch('/api/users/signup', {
    method: 'POST',
    body: JSON.stringify({ username: signupUsername.value.trim(), password: signupPassword.value.trim() }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
    document.location.reload();
    document.location.replace('/dashboard');
  } else {
    document.location.replace('/');
  }
};

signinForm.addEventListener('submit', loginFormHandler);
signupForm.addEventListener('submit', signupFormHandler);