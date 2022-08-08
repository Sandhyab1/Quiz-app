const questions =[
    {
        que: "Which of the following is a markup language",
        a: "css",
        b: "HTML",
        c: "javascript",
        d: "PHP",
        correct : "a",
    },
    {
        que: " How can you open a link in a new browser window?",
        a: "<a href='url' new>",
        b: "<a href='url' target='new'>",
        c: "<a href='url' target='_blank'>",
        d: "<a href='url' target=''>",
        correct : "c",
    },
    {
        que: "Which of these tags are all <table> tags?",
        a: "<table><head><tfoot>",
        b: "<table><tr><td>",
        c: "<table><tr><tt>",
        d: "<thead><body><tr>",
        correct : "b",
    },
    {
        que: "Which is not a property of attribute Behaviour of Marquee tag?",
        a: "alternate",
        b: "blur",
        c: "scroll",
        d: "slide",
        correct : "b",
    },
    {
        que: "keyword is used to declare variables in javascript.",
        a: "Var",
        b: "Dim",
        c: "String",
        d: "None of the above",
        correct : "a",
    }
];
let index=-0;
let total = questions.length;
let right=0;
let wrong=0;
let qesbox = document.getElementById("qesbox");
let optioninputs = document.querySelectorAll("input[type='radio']")
const LoadQuestion =() =>
 {
    if(index == total){
        return endquiz()
    }
    reset();
    const data = questions[index]
    qesbox.innerHTML = `${index+1})${data.que}`
    optioninputs[0].nextElementSibling.innerText = data.a
    optioninputs[1].nextElementSibling.innerText = data.b
    optioninputs[2].nextElementSibling.innerText = data.c
    optioninputs[3].nextElementSibling.innerText = data.d
 }

document.querySelector("#submit").addEventListener(
    "click",
    function()
{
    const data = questions[index]
    const ans = getanswer()
    if (ans== data.correct)
    {
    right++;
    }
    else
    {
        wrong++;
    }
    index++;
    LoadQuestion()
}
)

const getanswer=()=>
{
    let answer;
    optioninputs.forEach(
        (input) =>{
           if(input.checked){
            answer= input.value;
           }
        }
    )
    return answer;
}
const reset=() =>{
    optioninputs.forEach(
        (input) =>{
            input.checked=false;
        }
    )
}

const endquiz =() =>
{ 
    document.getElementById("box").innerHTML =`
    <div>
     <h3> Quiz Ended </h3>
      <h4>Thank You For PLaying</h4><br>
      <h2> Your Score:  ${right} / ${total}</h2>
      </div>
      `
}


