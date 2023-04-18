
fetch("content.json").then((response)=>{response.json().then((resp)=>{
    const messageDeChoix = document.createElement("h2");
messageDeChoix.innerText="Quel quizz allez vous choisir ?";
document.getElementById("app").appendChild(messageDeChoix);
messageDeChoix.style.paddingBottom="20px";
messageDeChoix.style.color="#1ABC9C";
    resp.forEach(element => { 
        let a = document.createElement("a");
        a.innerText=element.name;
        a.id = element.quizzNumber;
        a.onclick= function(event){
            localStorage.setItem("quizzNumber", event.target.id);
            window.location.href="quizz.html";

        }
        document.getElementById("app").appendChild(a);
        a.style.fontSize="30px";
        a.style.cursor="pointer";
        a.style.padding="0";
        
    });
})});

const score = localStorage.getItem('score');
const prenom = localStorage.getItem('prenom');

if(score == 3) {
    
    const h2 = document.createElement("h2");
    h2.innerText = "Félicitations," +" "+ prenom + " "+ "votre score est de " + score +" " +"bonnes réponses";
    document.getElementById("score").appendChild(h2);
} else if(score == 2) {
    const h2 = document.createElement("h2");
    h2.innerText = "Bien joué," +" "+ prenom +" " + "votre score est de " + score + " "+ " bonnes réponses." + " "+ "Vous pouvez continuer à vous exercer.";
    document.getElementById("score").appendChild(h2);
} else {
    const h2 = document.createElement("h2");
    h2.innerText = "Bien essayé"+ " "+ prenom +" ,"+ " " + "Votre score est de " + score + " "+ "bonnes réponses." + " "+ " Retentez votre chance :)";
    document.getElementById("score").appendChild(h2);
};

