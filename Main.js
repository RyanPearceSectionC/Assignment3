console.log('Hello World!');

console.log('Hello World!');
let quizScore = 0;
let quizAnswerList = [];
let quizQuestionsAnswered = [];
const quizAnswers =
[
    ['10', 'These numbers are the even numbers from 2 to 10, going up by 2 each.'], // q1
    ['hot', 'The opposite of cold is hot.'], // q2
    ['hand', 'In this context, the glove can only fit on the hand.'], // q3
    ['150', 'Take 60 and times it by 2.5 to get your answer.'], // q4
    ['hexagon', 'THe hexagon has 6 sides, a square has 4 and a triangle has 3.'], // q5
    ['2/3', 'Converting the fraction to a decimal will outline the answer for you. (1/2 = 0.5, 3/5 = 0.6 and 2/3 = 0.66..7)'], // q6
    ['90', 'Take 90 and times it by 1.5 (as 30 minutes is 0.5 hours) to get your answer.'], // q7
    ['', ''], // q8
    ['y', 'These are the first letter of each type of time, making Y the correct answer. (Milliseconds, Seconds, Minutes, Hours, Days, Months, Weeks and Years).'], // q9
    ['c', 'Letters are alternating between going down and going up the alphabet.\nA  B  C\n  Z  Y  X'], // q10
];
SetupList();

function SetupList()
{
    for (let x = 0; x < 10; x++) // Loop 10 times.
    {
        quizAnswerList.push(document.getElementById('quiz-a' + (x + 1))); // x + 1 to reach the current answer id since index = answer id - 1.
        quizQuestionsAnswered.push(false); // Just disables the submit button if it is already answered.
        console.log('document.getElementById(\'quiz-a' + (x + 1) + '\') is NULL?: ' + (document.getElementById('quiz-a' + (x + 1)) == null).toString());
        console.log('quizAnswerList[x] is NULL: ' + (quizAnswerList[x] == null).toString());
    }
}

function SubmitAnswer(qNum_)
{
    if (quizQuestionsAnswered[qNum_ - 1] == true) { return; } // Ignore code if question has already been answered.
    quizQuestionsAnswered[qNum_ - 1] = true;
    if (quizAnswerList.length == 0)
    {
        SetupList();
        console.log('Something strange happened! List wasn\'t set up properly.');
    }
    console.log('Checking Question #' + qNum_ + ': is AnswerInput NULL? -> ' + (quizAnswerList[qNum_ - 1] == null).toString());
    CheckAnswer(qNum_, quizAnswerList[qNum_ - 1]);
}

function CheckAnswer(qNum_, qAns_) // Checks to see if the answer is correct. If it is, add score and update it!
{
    
    // -- Variable Creation --
    let ans_ = qAns_.value;
    let explanation_ = "The correct answer is: " + quizAnswers[qNum_ - 1] + "\n";
    let isCorrect_ = false;

    // -- Variable Setting --
    isCorrect_ = (ans_ == quizAnswers[qNum_ - 1][0]) ? true : false; // Single line ver. of if checking and setting if isCorrect is true or not.
    explanation_ = (isCorrect_ == true) ? 'Correct!\n' + quizAnswers[qNum_ - 1][1] : 'Incorrect!\nThe correct answer is: ' + quizAnswers[qNum - 1][0] + "\nWhy?: " + quizAnswers[qNum_ - 1][1];
    quizScore += (isCorrect_ == true) ? 10 : 0;
    
    // -- LOGGING --
    console.log('User got Question #' + qNum_ + " correct?: " + isCorrect_);
    alert(explanation_); // Temporary, I plan on removing the submit button and replacing it with this text.
    // Update the Score After
    UpdateScore();
}

function UpdateScore()
{
    document.getElementById('quiz-score').innerHTML = quizScore.toString();
}