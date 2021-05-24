import { http } from './http'
import { ui } from './ui'

addEventListener('DOMContentLoaded', getComments);
function getComments() {
    http.get("http://localhost:3000/Comentarii")
      .then((comments) => ui.showComments(comments));
}


document.getElementById('submit').addEventListener('click', postComent);

function postComent(){
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let recenzie = {
        fullName: fullName,
        email: email,
        message: message,
    }

    http
    .post("http://localhost:3000/Comentarii", recenzie)
    .then((data) => showComments());	
}