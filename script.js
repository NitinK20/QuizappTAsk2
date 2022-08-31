const quizDb = [ {
    question:"Q1.HTML is what type of language ?",
    A:  "Scripting Language",
    B:  "Markup Language",
    C:  "Programming Language",
    D:  "Network Protocol",
    ans:"ans2",
},{

    question:"Q2.HTML uses",
    A:"User defined tags",
    B:"Pre-specified tags",
    C:"Fixed tags defined by the language",
    D:"Tags only for linking",
    ans:"ans3",
},{

    question:"Q3.The year in which HTML was first proposed _______.",
    A:"1990",
    B:"1980",
    C:"2000",
    D:"1995",
    ans:"ans1",
},{
    question:"Q4.Fundamental HTML Block is known as ___________.",
    A:"HTML Body",
    B:"HTML Tag",
    C:"HTML Attribute",
    D:"HTML Element",
    ans:"ans2"
},{
    question:"Q5.Apart from <b> tag, what other tag makes text bold ?",
    A:"<fat>",
    B:"<strong>",
    C:"<black>",
    D:"<emp>",
    ans:"ans2",

}

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    
    const questionList = quizDb[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.A;
    option2.innerText = questionList.B;
    option3.innerText = questionList.C;
    option4.innerText = questionList.D;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curansElem) => {
        if(curansElem.checked){
            answer = curansElem.id;
        }

        
    });
    return answer;
};

const deselectall = () => {
    answers.forEach((curansElem) => curansElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    
    if(checkedAnswer === quizDb[questionCount].ans){
        score++;
    }
    
    questionCount++;

    deselectall();

    if(questionCount < quizDb.length){
        loadQuestion();
    }                     
    else{
        
        showscore.innerHTML = `
            <h3> your score ${score}/${quizDb.length} </h3>
            <button class='btn' onclick='location.reload()'>Play Again</button>
    `;

    showscore.classList.remove('scoreArea');
}
});