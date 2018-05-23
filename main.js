//capture objects from DOM
let addButton = document.querySelector("#add")
let subButton = document.querySelector("#sub")
let multButton = document.querySelector("#mult")
let divButton = document.querySelector("#div")
let resultDiv = document.getElementById("result")
let clearButton = document.getElementById("clear")

//Add event listeners for buttons
addButton.addEventListener("click", function(){doMath("+")})
subButton.addEventListener("click", function(){doMath("-")})
multButton.addEventListener("click", function(){doMath("*")})
divButton.addEventListener("click", function(){doMath("/")})
clearButton.addEventListener("click", clearResult)

//function to perform math on inputs
function doMath(operator) {
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
function clearResult() {
    //remove result object from DOM
    resultDiv.removeChild(resultDiv.firstChild)
    //grab input fields from DOM
    let input1 = document.querySelector("#firstInput")
    let input2 = document.querySelector("#secondInput")
    //clear input fields
    input1.value = ""
    input2.value = ""
}