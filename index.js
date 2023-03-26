const questions = [
  {
    question: "This is a sample question ",
    a: "This is option a",
    b: "This is option b",
    c: "This is option c",
    d: "This is option d",
    ans: "a",
  },

  {
    question: "This is a question 2",
    a: "This is option a",
    b: "This is option b",
    c: "This is option c",
    d: "This is option d",
    ans: "b",
  },

  {
    question: "This is a question 3",
    a: "This is option a",
    b: "This is option b",
    c: "This is option c",
    d: "This is option d",
    ans: "c",
  },

  {
    question: "This is a question 4",
    a: "This is option a",
    b: "This is option b",
    c: "This is option c",
    d: "This is option d",
    ans: "d",
  },
];
optionlist = ["a", "b", "c", "d"];
const questionElement = document.getElementById("question");
const length = questions.length;
let options=document.querySelectorAll(".option")
let i=0;
let final=0

function generateQuestion() {
        
    if(i==length){
        document.querySelector(".card").innerHTML=`You have finished and scored ${final}`
        
    }
    else{
        questionElement.innerText = `Q${i+1}) ${questions[i].question}`;
        const options = document.querySelectorAll(".op");
        options.forEach((element, index) => {

          const current = optionlist[index];
          element.firstElementChild.nextElementSibling.innerHTML = questions[i][current];
        });
        reset()
       i=i+1 
    }
  
}
function fetchAns(){
    return questions[i-1].ans
}

function reset(){
    options.forEach((option) => {
        option.checked=false
    })
}

function submit(){
    let ans=fetchAns()
    options.forEach((option)=>{
        if(option.checked==true){
            let choice=option.value
            if(choice==ans)
                final++
        }

    })
    generateQuestion()

}

generateQuestion()