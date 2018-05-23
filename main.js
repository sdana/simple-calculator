//capture objects from DOM
let addButton = document.querySelector("#add")
let subButton = document.querySelector("#sub")
let multButton = document.querySelector("#mult")
let divButton = document.querySelector("#div")
let resultDiv = document.getElementById("result")
let clearButton = document.getElementById("clear")

//Add event listeners for buttons
addButton.addEventListener("click", addFunc)
subButton.addEventListener("click", subFunc)
multButton.addEventListener("click", multFunc)
divButton.addEventListener("click", divFunc)
clearButton.addEventListener("click", clearResult)

function addFunc() {
    //Grab the values from both text fields
    let firstNumber = parseInt(document.querySelector("#firstInput").value)
    let secondNumber = parseInt(document.querySelector("#secondInput").value)
    
    //create the object with the result
    let result = document.createTextNode(`${firstNumber+secondNumber}`)
    let resultH1 = document.createElement("H1")
    resultDiv.appendChild(resultH1).appendChild(result)
}

function subFunc() {
    //Grab the values from both text fields
    let firstNumber = parseInt(document.querySelector("#firstInput").value)
    let secondNumber = parseInt(document.querySelector("#secondInput").value)

    //create the object with the result
    let result = document.createTextNode(`${firstNumber - secondNumber}`)
    let resultH1 = document.createElement("H1")
    resultDiv.appendChild(resultH1).appendChild(result)
}

function multFunc() {
    //Grab the values from both text fields
    let firstNumber = parseInt(document.querySelector("#firstInput").value)
    let secondNumber = parseInt(document.querySelector("#secondInput").value)

    //create the object with the result
    let result = document.createTextNode(`${firstNumber * secondNumber}`)
    let resultH1 = document.createElement("H1")
    resultDiv.appendChild(resultH1).appendChild(result)
}

function divFunc() {
    //Grab the values from both text fields

    let firstNumber = parseInt(document.querySelector("#firstInput").value)
    let secondNumber = parseInt(document.querySelector("#secondInput").value)

    //create the object with the result
    let result = document.createTextNode(`${firstNumber / secondNumber}`)
    let resultH1 = document.createElement("H1")
    resultDiv.appendChild(resultH1).appendChild(result)
}

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