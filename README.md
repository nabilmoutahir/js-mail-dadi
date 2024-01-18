# TRACCIA

Mail
Chiedi all'utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull'esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

## SVOLGIMENTO MAIL
- chiedo mail all'utente con un input

- recupero valore email

- recupero bottone

- creo array con delle mail

- creo variabile booleana

- creo ciclo for per controllare che l'input (mail) sia presente nell'array

- se la mail è presente:

    - stampo alert con esito positivo

- se la mail non è presente 

    - stampo alert con esito negativo
 

## SVOLGIMENTO DADI

- recupero elementi utili

- creo l'array con numeri da 1 a 6

- creo event listerner sul bottone

- creo costanti per valori random basati sull'array

- al "click" del bottone

    - se il valore generato dall'utente è maggiore

        - cambio innerHtml di un elemento con "ha vinto l'user"

    - altrimenti se il valore generato dal pc è maggiore

         - cambio innerHtml di un elemento con "ha vinto il pc"

    - altrimenti se il valore è diverso (pari) compare "..."