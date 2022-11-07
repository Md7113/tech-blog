const addPost = async (event) => {
  event.preventDefault();

  window.location.href = "/addpost";
};

const comment = document.querySelector("#addPost");
comment.addEventListener("click", addPost);
