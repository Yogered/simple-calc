// let num = 32
// let firstName = 'Victor'
// const x = true
// let isProgrammer = 'Nikolay'

/* can do
let $num = 34
let num$ = 34
let myNum = 34
let my_num = 34
let num34 = 34 // good
let first_name = 'Victor' // bad
*/

/* restricted
let 45num = '34'
let my-num = 20
let const = 21
let let = 15
*/

// alert(firstName)
// console.log('Test:',firstName)

/* operators
console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10)
*/

// let num2 = num + 15
// console.log(num, num2)
// num = num2 - num
// console.log(num, num2)


//Задаются переменные
const resultElement = document.getElementById('result')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multipliBtn = document.getElementById('multipli')
const divideBtn = document.getElementById('divide')
let action = '+'

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

// console.log(resultElement.textContent)
// resultElement.textContent = (10 + 2) * 5

// console.log(typeof sum)

// submitBtn.onclick = function () {
//     console.log('Hello world')
// }

plusBtn.onclick = function () {
    action = '+'
}
minusBtn.onclick = function () {
    action = '-'
}
multipliBtn.onclick = function () {
    action = '*'
}
divideBtn.onclick = function () {
    action = '/'
}

function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result 
}

function computeNumbersWithAction(inp1, inp2, action) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (action == '+') {
        return num1 + num2
    } else if (action == '-') {
        return num1 - num2
    } else if (action == '*') {
        return num1 * num2
    } else if (action == '/') {
        return num1 / num2
    } 
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    // 
}



/* version of calc V1
submitBtn.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    } else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum 
    } else if (action == '*') {
        const sum = Number(input1.value) * Number(input2.value)
        resultElement.textContent = sum 
    } else if (action == '/') {
        const sum = Number(input1.value) / Number(input2.value)
        resultElement.textContent = sum 
    }
}
*/



/* version of calc V2
function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result 
}

submitBtn.onclick = function () {
    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        printResult(sum)
        // resultElement.textContent = result 
    } else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        printResult(sum)
        // resultElement.textContent = result 
    } else if (action == '*') {
        const sum = Number(input1.value) * Number(input2.value)
        printResult(sum)
        // resultElement.textContent = result 
    } else if (action == '/') {
        const sum = Number(input1.value) / Number(input2.value)
        printResult(sum)
        // resultElement.textContent = result 
    }
}
*/