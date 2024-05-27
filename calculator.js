const button = document.querySelector('.button-container');
const primaryDisplay = document.querySelector('.primary-display');
const secondaryDisplay = document.querySelector('.secondary-display');

const primaryNumLimit = 12

let operator = ''
let firstNumber = ''
let isPrevOperator = false

const calculate = () =>{
    switch(operator){
        case "÷":
            return Number(firstNumber) / Number(primaryDisplay.textContent)
        case "x":
            return Number(firstNumber) * Number(primaryDisplay.textContent)
        case "-":
            return Number(firstNumber) - Number(primaryDisplay.textContent)
        case "+": 
            return Number(firstNumber) + Number(primaryDisplay.textContent)
        case "%":
            return (Number(primaryDisplay.textContent))/ 100 * Number(firstNumber)
        default:
            return
    }
}

button.addEventListener('click', (e)=>{
    if(!e.target.classList.contains('button')) return;

    // console.log(e.target.textContent)
    let buttonValue = e.target.textContent

    let primaryValue = primaryDisplay.textContent 

    if(e.target.classList.contains('ac')){
        operator = ''
        firstNumber = ''
        primaryDisplay.textContent = '0'
        secondaryDisplay.textContent = ''
    }

    if(e.target.classList.contains('number')){
        if(primaryValue.length < primaryNumLimit){
            if(primaryValue !== "0"){
                primaryDisplay.textContent += buttonValue
            } else if (buttonValue !== '0'){
                primaryDisplay.textContent = buttonValue
            }
        }
    }
if(e.target.classList.contains('pm')){
    if (primaryValue[0] =='-'){
            primaryDisplay.textContent = primaryValue.substring(1)
    } else {
        primaryDisplay.textContent = '-'+primaryValue
    }
}

    if (e.target.classList.contains('decimal')){
        if(!primaryValue.includes('.')){
            primaryDisplay.textContent += '.'
        }
    }

    if(e.target.classList.contains('operator')){
       
        if (!isPrevOperator){
            if(secondaryDisplay.textContent && operator){
                firstNumber = calculate()
            } else {
                firstNumber = primaryValue
            }
            primaryDisplay.textContent = '0'
        }

        operator = buttonValue
        // firstNumber = primaryDisplay.textContent
        secondaryDisplay.textContent = firstNumber + " " + operator
        // primaryDisplay.textContent = ''
        isPrevOperator = true
    } else {
        isPrevOperator = false
    }


    if(e.target.classList.contains('equal')){
        firstNumber = calculate()
        operator =''
        secondaryDisplay.textContent = firstNumber
        primaryDisplay.textContent =''
        isPrevOperator = true
    }
})