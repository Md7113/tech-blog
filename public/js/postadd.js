const submitPost = async (event) => {
    event.preventDefault();
    const content = document.querySelector('#content').value.trim();
    const title = document.querySelector('#title').value.trim();
    if (content && title) {
        const response = await fetch('/addpost', {
          method: 'POST',
          body: JSON.stringify({  content, title }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        window.location.href = "/";
      }
}




const comment = document.querySelector("#submitPost");
comment.addEventListener('click', submitPost);