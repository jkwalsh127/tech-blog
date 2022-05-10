const comment = document.querySelector('#new-comment');

async function editFormHandler(event) {
  event.preventDefault();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/comments`, {
    method: 'POST',
    body: JSON.stringify({ 
      content: comment.value.trim(), 
      post_id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace(`/post/${post_id}`);
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#comment-form").addEventListener("submit", editFormHandler);