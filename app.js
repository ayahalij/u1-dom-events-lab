/*-------------------------------- Constants --------------------------------*/
const operators = {
    add: '+',
    sub: '-',
    mult: '*',
    div: '/',
    clear: 'C'}
    
const InDis = "0"

/*-------------------------------- Variables --------------------------------*/
let num1 = ''
let operator =''
let num2 = ''
let ShowResult = ''
let WaitingForOperand= false

/*------------------------ Cached Element References ------------------------*/
const display =document.querySelector('.display')
const buttons= document.querySelectorAll('.button')

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) =>{
button.addEventListener('click', (event) => {
const target=event.target
    if (target.classList.contains('number')){
        handleNumber(target.innerText)}

    else if(target.classList.contains('operator')){
        handleOperator(target.innerText)}

    else if(target.classList.contains('equals')){
        handleequal()}
    })
})

/*-------------------------------- Functions --------------------------------*/
function handleNumber(num){
    if (WaitingForOperand){
        WaitingForOperand = false
        display.innerText =num
    } 
    else{
        display.innerText= display.innerText === '0'? num:display.innerText+num
    }
}

function handleOperator(nextOperator){
    const inputValue = parseFloat(display.innerText)
    if (nextOperator ==="C"){
        num1=''
        num2 =''
        operator =''
        ShowResult=''
        display.innerText ='0'
        WaitingForOperand =false
        return
    }

    if (num1 === ""){
         num1 =inputValue} 
    else if (operator){
    const currentValue =num1 || 0
    const TheNewVlaue= calculate(currentValue,inputValue,operator)
    display.innerText = String(TheNewVlaue)
    num1 =TheNewVlaue
    }

operator=nextOperator
WaitingForOperand= true
}

function handleequal() {
    const inputValue = parseFloat(display.innerText)
    
    if(num1 !== ''&& operator && !WaitingForOperand) {
        const TheNewVlaue = calculate(num1,inputValue,operator)
        display.innerText = String(TheNewVlaue)
        num1=TheNewVlaue
        operator =' '
        WaitingForOperand = true}
}
function calculate(n1,n2,operator){
    switch (operator) {
    case'+':
        return n1 + n2

    case'-':
        return n1 - n2
          
    case'*':
        return n1 * n2
          
    case'/':
        return n2 !== 0 ? n1 / n2:0

    default:
        return n2;
    }
}
display.innerText = "0"