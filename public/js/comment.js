const addComment = async (event) => {
    event.preventDefault();
    
    window.location.href = '/addcom';
}




const comment = document.querySelector("#addCom");
comment.addEventListener('click', addComment);
