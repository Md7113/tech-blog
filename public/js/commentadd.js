const submitComment = async (event) => {
  event.preventDefault();
  console.log("yes");
  const content = document.querySelector("#content").value.trim();
  if (content) {
    const response = await fetch("/addcom", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });

    window.location.href = "/";
  }
};

const comment = document.querySelector("#submitCom");
comment.addEventListener("click", submitComment);
