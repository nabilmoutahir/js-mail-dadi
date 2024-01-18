console.log('JS OK')

// creo array
const autorizedMails = ["tiziano@boolean.it", "mattia@boolean.it", "luigi@boolean.it"]
console.log("lista mail accettate: " + autorizedMails)

const mails = autorizedMails
console.log(mails)

// creo prompt input mail
const inputMail = prompt('Inserisci la tua mail:')
console.log("la mail inserita nel prompt è: " + inputMail)

// ciclo for per controllare l'input
for (let i=0; i<mails.length; i++){
    
    console.log(mails[i])

    // se la mail è presente:
    if(inputMail == mails[i]){

        // stampo alert con esito positivo
        const correct = alert("L'email inserita è corretta!")

    }
}