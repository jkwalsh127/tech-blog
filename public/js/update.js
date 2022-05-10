const editContent = document.querySelector('#edit-content');
const editTitle = document.querySelector('#edit-title');
const editForm = document.querySelector('#edit-form');

async function editFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/posts/edit/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name: editTitle.value.trim(), content: editContent.value.trim() }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

editForm.addEventListener('submit', editFormHandler);