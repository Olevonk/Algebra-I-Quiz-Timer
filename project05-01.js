"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Oleksii Fon Krupp
      Date:   05/11/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");
let questionList = document.querySelectorAll("div#quiz input");
let timeID;

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Event handler for the Start Quiz button
startQuiz.onclick = function() {
    overlay.className = "showquiz";
    timeID = setInterval(countdown, 1000);
};

// Function to check the student answers
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

// Function to update the countdown clock
function countdown() {
    if (timeLeft === 0) {
        clearInterval(timeID);
        let totalCorrect = checkAnswers();
        if (totalCorrect === correctAnswers.length) {
            alert("Congratulations! You got 100%!");
        } else {
            alert(`You got ${correctAnswers.length - totalCorrect} out of ${correctAnswers.length} questions incorrect.`);
            timeLeft = quizTime;
            quizClock.value = timeLeft;
            overlay.className = "hidequiz";
        }
    } else {
        timeLeft--;
        quizClock.value = timeLeft;
    }
}






















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

