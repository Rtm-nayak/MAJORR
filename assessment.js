let questionsData = {};
let currentTopic = '';
let currentQuestionIndex = 0;
let score = 0;

// Load questions from JSON file
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    questionsData = data;
  })
  .catch(error => console.error('Error loading questions:', error));

// Start quiz
function startQuiz(topic) {
  currentTopic = topic;
  currentQuestionIndex = 0;
  score = 0;

  document.getElementById('topics-container').style.display = 'none';
  document.getElementById('quiz-section').style.display = 'block';
  document.getElementById('quiz-title').textContent = topic.replace(/_/g, ' ').toUpperCase();

  document.getElementById('next-btn').style.display = 'inline-block';
  document.getElementById('restart-btn').style.display = 'none';
  document.getElementById('score-section').textContent = '';

  showQuestion();
}

// Display a question
function showQuestion() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  const questionObj = questionsData[currentTopic][currentQuestionIndex];

  const questionElem = document.createElement('p');
  questionElem.textContent = questionObj.question;
  container.appendChild(questionElem);

  questionObj.options.forEach(option => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'option';
    radio.value = option;
    label.appendChild(radio);
    label.textContent += option;
    container.appendChild(label);
  });
}

// Go to next question
function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) {
    alert('Please select an option!');
    return;
  }

  const answer = questionsData[currentTopic][currentQuestionIndex].answer;
  if (selectedOption.value === answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questionsData[currentTopic].length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Show final score
function showScore() {
  document.getElementById('quiz-container').innerHTML = '';
  document.getElementById('score-section').textContent = `You scored ${score} out of ${questionsData[currentTopic].length}`;
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('restart-btn').style.display = 'inline-block';
}

// Restart quiz
function restartQuiz() {
  currentTopic = '';
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('score-section').textContent = '';
  document.getElementById('quiz-section').style.display = 'none';
  document.getElementById('topics-container').style.display = 'grid';
}

// Event listeners for buttons
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);

console.log("assessment.js loaded");
