alert('Are we going to do math operations?')
const numberOne = Number(prompt('Enter the first number here:'))
const numberTwo = Number(prompt('Enter the second number here:'))

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let mult = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`The sum of the two numbers is: ${sum}`)
alert(`The subtraction of the two numbers is: ${sub}`)
alert(`The multiplication of the two numbers is: ${mult}`)
alert(`The division of the two numbers is: ${div}`)
alert(`The rest of division of the two numbers is: ${restDiv}`)

if (sum % 2 === 0){
  alert(`The sum of the two numbers is even: ${sum}`)

} else {
  alert(`The sum of the two numbers is odd: ${sum}`)
}

if(numberOne != numberTwo){
  alert(`The two numbers are different.`)
} else{
  alert(`The two numbers are the same.`)
}





   
