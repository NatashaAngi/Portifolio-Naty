function sendMail(){
    const params = {
        name:document.getElementById("name").value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }


const serviceID = "service_sen3hp4"
const template = "template_14pd1hp"

emailjs.send(serviceID,template,params).then(response=>{document.getElementById("name").value='',document.getElementById("email").value ='',document.getElementById("message").value=''; alert("mensagem enviada")}).catch(error=>console.log(error))}

function toggleMenu() {
    const menu = document.querySelector('.MenuItens');
    menu.classList.toggle('menuOpen');
}
function setupMenu() {
    const menuBtn = document.querySelector('.menuBTN');
    menuBtn.addEventListener('click', toggleMenu);
}
document.addEventListener('DOMContentLoaded', setupMenu);