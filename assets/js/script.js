// handle user input

function openForm() {
    document.getElementById("userInput").style.display = "block";
  }

// Quiz section
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");

const choiceA = document.getElementById('a');
const choiceB = document.getElementById('b');
const choiceC = document.getElementById('c');

let correctScore = 0;
let incorrectScore = 0;

// questions

let questions = [
  {
    question: "What is a Latte?",
      choiceA: "a. Espresso lengthened with water",
      choiceB: "b. A shot of Espresso",
      choiceC: "c. A single or double shot of espresso (1/3 of your drink), 2/3 of your drink is steamed milk with a small layer of frothed milk on top",
      correctAnswer: "c"
    },  
  {
    question: "What stimulant exists in coffee?",
      choiceA: "a. Caffeine",
      choiceB: "b. Nicotine",
      choiceC: "c. Ginseng", 
      correctAnswer: "a"
    },
  {
    question: "Which of these can be used to brew coffee?",
      choiceA: "a.A pot",
      choiceB: "b.A grinder",
      choiceC: "c.A French Press",
      correctAnswer: "c"
    },
  {
    question: "Which country is well known for producing coffee?",
      choiceA: "a.Ireland",
      choiceB: "b.Brazil",
      choiceC: "c.Iceland",
      correctAnswer: "b"
    },
  {
    question: "What is the measurement of espresso known as?",
      choiceA: "a.A basket",
      choiceB: "b.A bag",
      choiceC: "c.A shot",
      correctAnswer: "c"
    },
  {
    question: "What name is given to someone who makes and serves coffee to customers?",
      choiceA: "a.A barista",
      choiceB: "b.A brewer",
      choiceC: "c.A baker",
      correctAnswer: "a"
    },
  {
    question: "What is the artwork placed on top of coffee drinks with steamed milk known by?",
      choiceA: "a.Marble effect",
      choiceB: "b.Milk Art",
      choiceC: "c.Latte Art",
      correctAnswer: "c"
  },  
  {
    question: "What form does coffee need to exist in to brew with?",
      choiceA: "a.Ground",
      choiceB: "b.Wholebean",
      choiceC: "c.Green",
      correctAnswer: "a"
    },
  { 
    question: "What effect is coffee known to have on your body?",
      choiceA: "a.Helps you to fall asleep",
      choiceB: "b.Causes you to feel more alert",
      choiceC: "c.Helps with headache symptoms",
      correctAnswer: "b"
    },
  {
    question: "Which of these is not a coffee drink?",
      choiceA: "a.Espresso",
      choiceB: "b.Cappuccino",
      choiceC: "c.Matcha Latte",
      correctAnswer: "c"
    },  
  ];

  // variables

  const lastQuestion = questions.length -1;
  let runningQuestion = 0;

  // function to render a question
  
  function renderQuestion () {
      let q = questions[runningQuestion];
      question.innerHTML = "<p>" + q.question + "</p>";
      choiceA.innerHTML = q.choiceA;
      choiceB.innerHTML = q.choiceB;
      choiceC.innerHTML = q.choiceC;
  }

  renderQuestion();
  let score= 0;

// Function to check the answer

 function checkAnswer(answer) { 
    if (answer == questions[runningQuestion].correctAnswer) {
          // answer is correct
          score ++;
          answerIsCorrect();
        } else {
          // answer is incorrect
          answerIsIncorrect();
        }
          if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
            move();
            
        }
   }
      
   // Gets the current score from the DOM and increment by 1
   function answerIsCorrect() {
      let oldScore = parseInt(document.getElementById('correct').innerText);
       document.getElementById('correct').innerText= ++oldScore; 
  }

  function answerIsIncorrect() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText= ++oldScore; 
  }

  // Progress bar to show user what stage of the quiz they are at

  var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("my-progress");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}