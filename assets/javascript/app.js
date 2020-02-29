const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')



let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {

  currentQuestionIndex++

  setNextQuestion()

})


function startGame() {

  countRightAnswers = 0;

  counter = 30

  ranoutoftime.classList.add('hide')

  questionElement.classList.remove('hide')

  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)

  currentQuestionIndex = 0

  questionContainerElement.classList.remove('hide')

  answerButtonsElement.classList.remove('hide')

  setNextQuestion()

}



function setNextQuestion() {

  resetState()

  showQuestion(shuffledQuestions[currentQuestionIndex])

}



function showQuestion(question) {

  questionElement.innerText = question.question

  question.answers.forEach(answer => {

    const button = document.createElement('button')

    button.innerText = answer.text

    button.classList.add('btn')

    if (answer.correct) {

      button.dataset.correct = answer.correct

    }
    

    button.addEventListener('click', selectAnswer)

    answerButtonsElement.appendChild(button)

  })

}



function resetState() {

  clearStatusClass(document.body)

  Incorrectmessage.classList.add('hide')

  completedtest.classList.add('hide')

  Correctmessage.classList.add('hide')

  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

  }

}

function selectAnswer(e) {

  const selectedButton = e.target

  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {

    setStatusClass(button, button.dataset.correct)

  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')


  } else {

    startButton.innerText = 'Start New Quiz'

    startButton.classList.remove('hide')

    completedtest.classList.remove('hide')

    clearInterval(myTimer);

  }
  if (selectedButton.dataset = correct) {
    Correctmessage.classList.remove('hide')
    countRightAnswers++;
 }
 else {
    Incorrectmessage.classList.remove('hide')
 }
 document.getElementById('right-answers').innerHTML = countRightAnswers
}

let countRightAnswers = 0

var Correctmessage = document.getElementById("success")

var Incorrectmessage = document.getElementById("fail")

var ranoutoftime = document.getElementById("ranoutoftime")

var completedtest = document.getElementById("completedtest")

function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct) {

    element.classList.add('correct')

  } else {

    element.classList.add('wrong')


  }

}



var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 30;

     function myClock() {
       document.getElementById("time").innerHTML = --c;
       if (c == 0) {
        questionElement.classList.add('hide')
        answerButtonsElement.classList.add('hide')
        nextButton.classList.add('hide')
        startButton.classList.remove('hide')
        Incorrectmessage.classList.add('hide')
        Correctmessage.classList.add('hide')
        ranoutoftime.classList.remove('hide')
         clearInterval(myTimer);
       }
     }
   }

function clearStatusClass(element) {

  element.classList.remove('correct')

  element.classList.remove('wrong')

}



const questions = [

  {

    question: 'What is my middle name?',

    answers: [

      { text: 'Jacob', correct: false },

      { text: 'David', correct: false },

      { text: 'Nicholas', correct: true },

      { text: 'Aaron', correct: false }

    ]

  },

  {

    question: 'How old am I?',

    answers: [

      { text: '21', correct: false },

      { text: '22', correct: false },

      { text: '20', correct: true },

      { text: '23', correct: false }

    ]

  },

  {

  question: 'Where have I previously been employed at?',

  answers: [

    { text: 'Walmart', correct: true },

    { text: 'Rite Aid', correct: true },

    { text: 'Walgreens', correct: false },

    { text: 'Wendys', correct: true }

  ]

},    
    {
    question: 'Why am I learning coding?',

    answers: [

  { text: 'Hobby', correct: true },

  { text: 'Future Career', correct: true },

  { text: 'To Waste Time', correct: true },

  { text: 'Forced To', correct: false }

]

},

{

    question: 'What is my highest education?',

    answers: [

      { text: 'Associates', correct: false },

      { text: 'Highschool Diploma', correct: false },

      { text: 'GED', correct: true },

      { text: 'Bachelors', correct: false }

    ]

  },

  {

    question: 'What is my dream job?',

    answers: [

      { text: 'Entrepeneur', correct: true },

      { text: 'Full Stack Web Developer', correct: false },

      { text: 'Accounting', correct: false },

      { text: 'Project Manager', correct: false }

    ]

  },

  {

    question: 'Who is my best friend?',

    answers: [

      { text: 'Brenden Wilson', correct: true },

      { text: 'Ryan Burr', correct: false },

      { text: 'Tristden Zug', correct: false },

      { text: 'Marcos Alvarado', correct: false }

    ]

  }

]



