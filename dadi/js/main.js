console.log('JS OK')

// elemento dell'user box
const userValue = document.getElementById("user-content")
console.log(userValue)

// elemento del pc box
const pcValue = document.getElementById("pc-content")
console.log(pcValue)

// elemento risultato
const result = document.getElementById("result-text")
console.log(result)

// elemento del bottone
const button = document.getElementById("generator")
console.log(button)

// creo array
const numbers = ["1", "2", "3", "4", "5", "6"]
console.log(numbers)

// event listener sul bottone
button.addEventListener('click', function() {
    
    // numero random per user
    const userNumber = numbers[Math.floor(Math.random() * 6)];

    // numero random per pc
    const pcNumber = numbers[Math.floor(Math.random() * 6)];

    userValue.innerHTML = (userNumber)

    pcValue.innerHTML = (pcNumber)

    // condizionali
    if(userNumber > pcNumber) {

        result.innerHTML = ("Ha vinto l'user!")

    } else if (userNumber < pcNumber) {

        result.innerHTML = ("Ha vinto il pc!")
        
    } else {

        result.innerHTML = ("...")
    }

})