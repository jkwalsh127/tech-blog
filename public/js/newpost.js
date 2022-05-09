const newpostTitle = document.querySelector('#new-post-title');
const newpostContent = document.querySelector('#new-post-content');
const newpostForm = document.querySelector('#new-post-form');

async function newpostFormHandler(event) {
  event.preventDefault();
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ name: newpostTitle.value.trim(), content: newpostContent.value.trim() }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
};

newpostForm.addEventListener('submit', newpostFormHandler);