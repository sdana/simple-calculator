//capture objects from DOM
let addButton = document.querySelector("#add")
let subButton = document.querySelector("#sub")
let multButton = document.querySelector("#mult")
let divButton = document.querySelector("#div")
let modButton = document.querySelector("#mod")
let resultDiv = document.getElementById("result")
let clearButton = document.getElementById("clear")

//function to perform math on inputs
const doMath = (operator) => {
    //Grab the values from both text fields
    let firstNumber = document.querySelector("#firstInput").value
    let secondNumber = document.querySelector("#secondInput").value

    //concatenate the string for the operation
    let operation = firstNumber + operator + secondNumber
    //perform math operation on string and create DOM node
    let result = document.createTextNode(`${eval(String(operation))}`)
    let resultH1 = document.createElement("H1")
    resultDiv.appendChild(resultH1).appendChild(result)
}

//function to clear result object from DOM and clear input fields
const clearResult = () => {
    //remove result object from DOM
    resultDiv.removeChild(resultDiv.firstChild)
    //grab input fields from DOM
    let input1 = document.querySelector("#firstInput")
    let input2 = document.querySelector("#secondInput")
    //clear input fields
    input1.value = ""
    input2.value = ""
}

//Add event listeners for buttons
// addButton.addEventListener("click", function(){doMath("+")})
addButton.addEventListener("click", () => { doMath("+") })
subButton.addEventListener("click", () => {doMath("-")})
multButton.addEventListener("click", () =>{doMath("*")})
divButton.addEventListener("click", () => {doMath("/")})
modButton.addEventListener("click", () => { doMath("%") })
clearButton.addEventListener("click", clearResult)