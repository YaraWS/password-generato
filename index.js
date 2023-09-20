let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789¬!£$%^&*()_+"
let pw1 = document.getElementById("pw1")
let pw2 = document.getElementById("pw2")
let pw3 = document.getElementById("pw3")
let pw4 = document.getElementById("pw4")
let passwordBtn = document.getElementById("password-btn")
let numberInput = document.getElementById("numberInput")
// let copyPaste = ""
const copyContainers = document.querySelectorAll('.copy-container')


// Event Listeners
passwordBtn.addEventListener('click',function(){
    if(numberInput.value > 5){
      renderPasswords()
      console.log(copyButtons)
    }else {
      window.alert("Please select a number between 6 and 20.")
    } 
})


// Attach click event listener to each copy container
copyContainers.forEach(copyContainer => {
  copyContainer.addEventListener('click', function () {
    const passwordId = this.querySelector('.copy-button').id.replace('copy-', ''); // Extract the password ID
    copyToClipboard(passwordId);
  });
});




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

    pw1.querySelector('.password-text').textContent = generatePw()
    pw2.querySelector('.password-text').textContent = generatePw()
    pw3.querySelector('.password-text').textContent = generatePw()
    pw4.querySelector('.password-text').textContent = generatePw()

    document.querySelectorAll('.copy-button').forEach(button => {
      button.classList.remove('hidden');
    });
}

function copyToClipboard(passwordId) {
  const passwordElement = document.getElementById(passwordId);
  const passwordText = passwordElement.textContent;

  // Use the Clipboard API to copy text to the clipboard
  navigator.clipboard.writeText(passwordText)
    .then(() => {
      // Add the "copied" class to change the button's color
      const copyButton = passwordElement.querySelector('.copy-button');
      copyButton.classList.add('copied');

      // Remove the class after a timeout (you can adjust the timeout duration)
      setTimeout(() => {
        copyButton.classList.remove('copied');
      }, 2000);
    })
    .catch(err => {
      console.error('Error copying to clipboard: ', err);
    });
}

