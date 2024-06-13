const startQuiz=document.querySelector("#btn");
const getQuestion=document.getElementById("question");
const getAnswers=document.getElementById("answers");
const nextQuestion=document.getElementsByClassName("next-Q");
// const ansHeading=document.getElementsByClassName("ansHeading");
const container=document.querySelector(".container");
const body=document.querySelector("body");


const questions =[
    {
        question:'What new input type was introduced in HTML5 for selecting a date?',
        answers:[
            {text:'A) DMY',correct:false},
            {text:'B) date',correct:true},
            {text:'C) date5',correct:false},
            {text:'D) DD/MM/YYYY',correct:false}
        ]
    },
    {
        question:' What property in CSS is used to change the text color of an element?',
        answers:[
            {text:'A) text-color',correct:false},
            {text:'B) color-text',correct:false},
            {text:'C) colors',correct:false},
            {text:'D) color',correct:true}
        ]
    },
    {
        question:'How do you declare a variable in JavaScript?',
        answers:[
            {text:'A) int,char',correct:false},
            {text:'B) let,const,var',correct:true},
            {text:'C) Integer, Float, String',correct:false},
            {text:'D) let',correct:false}
        ]
    },
    {
        question:' Which version control system is widely used by developers to manage code changes?',
        answers:[
            {text:'A) Bootstrap',correct:"false"},
            {text:'B) React',correct:false},
            {text:'C) git',correct:true},
            {text:'D) Terminal',correct:false}
        ]
    },
    {
        question:'What method is used to parse a string into a JSON object?',
        answers:[
            {text:'A) JSON.stringnity',correct:false},
            {text:'B) JSON.object',correct:false},
            {text:'C) JSON.parse',correct:true},
            {text:'D) JSON.stringnity(data)',correct:false}
        ]
    },
    {
        question:'What is axios?',
        answers:[
            {text:'A) Library to make HTTP request',correct:true},
            {text:'B)Front-end framework',correct:false},
            {text:'C) Database management system',correct:false},
            {text:'D) Programming language',correct:false}
        ]
    },
    {
        question:'Which of the following is not an inline element?',
        answers:[
            {text:'A) <span>',correct:false},
            {text:'B) <input>',correct:false},
            {text:'C) <div>',correct:true},
            {text:'D) <a>',correct:false}
        ]
    },
    {
        question:'Which of the following is not a pseudo-class or pseudo-element?',
        answers:[
            {text:'A) :hover',correct:false},
            {text:'B) ::before',correct:false},
            {text:'C) :visited',correct:false},
            {text:'D) :center',correct:true}
        ]
    },
    {
        question:'Which CSS position property value positions an element relative to its closest positioned ancestor (other than static)?',
        answers:[
            {text:'A) static',correct:false},
            {text:'B) absolute',correct:true},
            {text:'C) relative',correct:false},
            {text:'D) fixed',correct:false}
        ]
    },
    {
        question:' Which method adds a class to an elements classList in JavaScript?',
        answers:[
            {text:'A) add',correct:true},
            {text:'B) append',correct:false},
            {text:'C) insert',correct:false},
            {text:'D) push',correct:false}
        ]
    },
    {
        question:'Which statement about arrow functions in JavaScript is true?',
        answers:[
            {text:'A) Cannot have parameters',correct:false},
            {text:'B) Cannot be object methods',correct:false},
            {text:'C)  Inherit this context',correct:true},
            {text:'D) Always named',correct:false}
        ]
    },

    
];


startQuiz.addEventListener("click",()=>{
    startQuiz.classList.add('hide');
    showQuestion();
    // nextQuestion();
    
    });
    
let randomQuestionIndex=0;  
    
function showQuestion(){
    // const randomQuestionIndex=Math.floor(Math.random()*questions.length);
     resetState();
    const question=questions[randomQuestionIndex];
    getQuestion.innerText=question.question;

    question.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerText=answer.text;
        // console.log(button);
        button.classList.add('ansBtn');
        button.dataset.correct=answer.correct;
        getAnswers.appendChild(button);

        button.addEventListener("click",selectAnswer);

        
        });
    nextButton();

}



function nextButton(){
    let btn=document.createElement('button');
    btn.innerText="Next";
    btn.classList.add('next-Q');
    body.appendChild(btn);
    btn.addEventListener("click",()=>{
       randomQuestionIndex++;
       if(randomQuestionIndex<questions.length){
        showQuestion();
       }else{
        endQuiz();
       }
    });
    container.appendChild(btn);
}

function resetState() {
    getQuestion.innerHTML = '';
    getAnswers.innerHTML = '';
    const existingNextButton = document.querySelector('.next-Q');
    if (existingNextButton) {
        existingNextButton.remove();
    }
    const existingHeading = document.querySelector('h3.anssHeading');
    if (existingHeading) {
        existingHeading.remove();
    }
}

function selectAnswer(e){
     const ans= e.target;
     const correctAns= ans.dataset.correct;
     console.log(correctAns); 

     // Remove any existing h3 element with the class 'ansHeading'
    const existingHeading = document.querySelector('h3.anssHeading');
    if (existingHeading) {
        existingHeading.remove();
    }

     const ansHeading=document.createElement('h3');
     ansHeading.classList.add('anssHeading');
     
     if(correctAns=='true'){
        ans.classList.add('correct');
        setTimeout(function(){
            ans.classList.remove('correct');
        },1000);
        ansHeading.innerText="Congratulations! Your answer is correct";
        body.append(ansHeading);
        // ansHeading.innerText="";
        }
    else{
            //  alert("Your answer was wrong! Please try again");
        ans.classList.add('wrong');
        setTimeout(function(){
            ans.classList.remove('wrong');
        },500);
        ansHeading.innerText="Your answer was wrong! Please try again";
        // ansHeading.innerText="";
         body.append(ansHeading);
     }
    

}

function endQuiz() {
    resetState();
    const endMessage = document.createElement('h2');
    
    endMessage.innerText = "Quiz Completed!";
    endMessage.classList.add('end-message1');
    container.appendChild(endMessage);
}
// getAnswers.addEventListener("click",()=>{
//     if(button.correct==='true'){
//         console.log("pass");
//     }else{
//         console.log("fail");
//     }
// })


