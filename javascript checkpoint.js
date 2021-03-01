const numOfQuestions = 5;
let i = 0;
var score = 0;

var QuizQuestions = ["Where do you live?", "What is the world's largest animal?", "Who is the first president of the United States?", "What is the worlds's largest bird?", "How old are you?"];

var UserAnswers = [];
var QuizAnswers = ["USA", "Elephant", "Lincoln", "Ostrich", "50"];


function displayQuiz() {
  var score = 0;
  for (let j = 1; j <= numOfQuestions; j++) {
    UserAnswers[UserAnswers.length] = prompt("Question: " + j + " " + QuizQuestions[j - 1]);
  }
  console.log("End of quiz.. Please wait for your grade.");

  //Display the user answers along with questions
  console.log("Here are your answers:");

  for (let j = 1; j <= numOfQuestions; j++) {
    UserAnswers[UserAnswers.length] = console.log("Question: " + j + " " + QuizQuestions[j - 1] +
      " " + UserAnswers[j - 1]);
    //Check the answers and calculate the score     
     if (UserAnswers[j-1] == QuizAnswers[j-1])
        score += 20;     
    }
  
    console.log("Your score is " + score);
  }

  displayQuiz();
