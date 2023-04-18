
var firstName;

function inputName(){
    event.preventDefault();
    firstName=document.getElementById('prenom').value;
    if (firstName !=""){
        localStorage.setItem("prenom", firstName);
        window.location.href="exams.html";
    } else {alert("Saisissez votre prénom")}
}




