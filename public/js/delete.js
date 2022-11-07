const deletePost = async (event) => {
  event.preventDefault();
  const postid = document.querySelector("#postId").textContent;
  if (postid) {
    const response = await fetch("/addpost/deletepost", {
      method: "DELETE",
      body: JSON.stringify({ postid }),
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "/dashboard";
  }
};

const deletevar = document.querySelector("#delete");
deletevar.addEventListener("click", deletePost);
