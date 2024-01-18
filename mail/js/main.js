console.log('JS OK')

// recupero valore email
const mailInput = document.getElementById("email-input");
console.log(mailInput);

// recupero button
const btn = document.getElementById("submit-btn");
console.log(btn);

// creo array
const autorizedMails = ["tiziano@boolean.it", "mattia@boolean.it", "luigi@boolean.it"]
console.log("lista mail accettate: " + autorizedMails)

let correct = false

// event listener
btn.addEventListener ('click', function(){

    const mail = mailInput.value;
    console.log(mail)

    for (let i=0; i<autorizedMails.length; i++){

        // se la mail è presente:
        if(mail == autorizedMails[i]){

            // stampo alert con esito positivo
            alert("L'email inserita è corretta!")
            
            correct = true
        }  
    }

    if (!correct) {
        // stampo alert con esito negativo
        alert("L'email inserita non è corretta!");
    }
    
})

           





