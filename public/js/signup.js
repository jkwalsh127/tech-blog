const signupUsername = document.querySelector('#username-signup');
const signupPassword = document.querySelector('#password-signup');
const signupForm = document.querySelector('#signup-form');

async function signupFormHandler(event) {
  event.preventDefault();
  const response = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify({ 
      username: signupUsername.value.trim(), 
      password: signupPassword.value.trim(), 
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    //this is not the appropriate place for such an alert, but it fits the functioning of the app at this time
    alert('enter a password of 8 characters or longer');
  }
};

signupForm.addEventListener('submit', signupFormHandler);