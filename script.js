const data = [
    {
        "id":1,
        "question":"Ehmed haradir?",
        "answers":["Guneslide","Ehmedlide","Oguzda","Qebelede"]
    },
    {
        "id":2,
        "question":"Zahid Mellimin fav sagirdi?",
        "answers":["Tuqay","Tuqay","Tuqay","Tuqay"]
    },
    {
        "id":3,
        "question":"Aylin kimdir?",
        "answers":["IDK","Men nebllim","Dede Qorqud","Quagmire"]
    }
]

let current = 0
let question = document.querySelector('#question')
let btnSubmit = document.querySelector('#btnSubmit')
let cases = document.querySelector('.case')
let quizCard = document.querySelector('.quiz-card')
let result = document.querySelector('#result')

const loadData = () => {
    if (current !== data.length) {
        question.innerHTML = data[current].question
        for(let i = 0; i<data[current].answers.length;i++){
            cases[i].innerHTML = data[current].answers[i]
        }
        current++
    }
    else {
    quizCard.remove()
    result.innerHTML = `Your score is Ehmed`   
    }
}

btnSubmit.addEventListener('click',loadData)

loadData()