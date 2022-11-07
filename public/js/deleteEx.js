const deletePost = async (event) => {
const postid = document.querySelector("#postId").textContent;
  if (postid) {
    const response = await fetch("/addpost/deletepost", {
      method: "DELETE",
      body: JSON.stringify({ postid }),
      headers: { "Content-Type": "application/json" },
    });
    window.location.href = "/dashboard";
  }
}

const updatePost = async (event) => {
    const postid = document.querySelector("#postId").textContent;
    const content = document.querySelector("#content").value.trim();
    const title = document.querySelector("#title").value.trim();
      if (postid) {
        const response = await fetch("/update", {
          method: "PUT",
          body: JSON.stringify({ postid,content,title }),
          headers: { "Content-Type": "application/json" },
        });
        window.location.href = "/dashboard";
      }
    }


  const updatevar = document.querySelector("#submitPost");
updatevar.addEventListener("click", updatePost);

const deletevar = document.querySelector("#delete");
deletevar.addEventListener("click", deletePost);