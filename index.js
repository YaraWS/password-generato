let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789¬!£$%^&*()_+"
let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")
let pw3 = document.getElementById("pw3")
let pw4 = document.getElementById("pw4")


//Function will get ONE random character amoung my String
function randomNumber() {
 
  return  Math.floor(Math.random() * characters.length)
}


//Create an empty var password / Assign the pwLength var with the input of the user
//For loop will run the code as many times as the value of the variable pwLength /  var random receives my randomNumber function / var password receives a random character using the charAt Method and returns the character at a specified position in a string. In this case a random character
function generatePw() {
    let password = ""
    let pwLength = 0
      pwLength = document.getElementById("numberInput").value 
 
        for (let i = 0; i < pwLength  ; i++){
         let random = randomNumber()
         password += characters.charAt(random)
    }
    return password
}

//Function that writes the password at the DOM 
function renderPasswords() {
    pw1.textContent = generatePw()
    pw2.textContent = generatePw()
    pw3.textContent = generatePw()
    pw4.textContent = generatePw()
    
}

