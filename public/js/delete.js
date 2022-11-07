const changePost = async (event) => {
  console.log('ysy')
  event.preventDefault();
  const postid = document.querySelector("#postId").textContent;
  console.log(postid)
  if (postid) {
    const response = await fetch("/update", {
      method: "post",
      body: JSON.stringify({ postid }),
      headers: { "Content-Type": "application/json" },
    }); 
    console.log(response)
  }
    window.location.href = "/update/con";
};

const deletevar = document.querySelector("#update");
deletevar.addEventListener("click", changePost);
