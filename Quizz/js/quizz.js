let score = 0;

fetch("content.json").then((response) => { response.json().then((resp) => {
    resp.forEach(element => {



      if (localStorage.getItem("quizzNumber") == element.quizzNumber) {

        const quizTitle = document.createElement("h1");
        quizTitle.innerText = element.name;
        document.getElementById("titre").appendChild(quizTitle);

        const questions = Object.values(element.questions);
        questions.forEach(question => {
          let pQuestion = document.createElement("p");
          pQuestion.innerText = question.question;
          pQuestion.style.fontSize = "30px";

          let dejaClique = false;



          let ulAnswers = document.createElement("ul");

          Object.values(question.answers).forEach((answer) => {
            let liAnswer = document.createElement("li");
            liAnswer.innerText = answer;
            liAnswer.style.cursor = "pointer";
            liAnswer.style.listStyle = "none";
            liAnswer.style.fontSize = "20px";
            liAnswer.style.paddingTop = "30px";
            liAnswer.addEventListener("click", () => {

              if (dejaClique === false) {
                dejaClique = true;
                if (answer === question.correct) {
                  let pCorrect = document.createElement("p");
                  pCorrect.innerText = ("Bien joué !")
                  liAnswer.appendChild(pCorrect);
                  pCorrect.style.color = "green";

                  score++;
                  console.log(score);
                } else {
                  let pIncorrect = document.createElement("p");
                  pIncorrect.innerText = "La bonne réponse était :" + " " + question.correct;
                  liAnswer.appendChild(pIncorrect);
                  pIncorrect.style.color = "Red";
                }

              }
            })

            ulAnswers.appendChild(liAnswer);
          });

          pQuestion.appendChild(ulAnswers);
          document.getElementById("app").appendChild(pQuestion);


        });
      };
    });
  }).then(() => {
    let button = document.createElement("button");
    button.innerText = "Voir les résultats";
    button.addEventListener("click", () => {
      localStorage.setItem("score", score);
      window.location.href = "result.html";
    })
    document.getElementById("app").appendChild(button);
  })




})






