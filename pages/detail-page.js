//Submit comment
function submitComment(){
    const inputField = document.getElementById('inputText');  
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;

    //Wrap  user comments
    console.log(name, msg);   

    //make the space for user input
    const commentBox = document.createElement('section');
    const commentHead = document.createElement('h3');
    const commentText = document.createElement('p');
    commentHead.innerHTML = `${name} Said:`;
    commentText.innerHTML = msg;
    commentBox.classList.add(CommentBox);
    commentBox.appendChild(commentHead);
    commentBox.appendChild(commentText);
    
    console.log(commentBox);
    
}