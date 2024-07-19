Esercizio di oggi: Vue To Do List
nome repo: vue-todolist
Descrizione: Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1 Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2 Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3 Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus: 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento!

soluzione

1.creo un markup con html e css
2.una volta creato il markup, creo l'istanza vue in js
3.creo un array di oggetti in cui inseriro 2 proprieta per ogni oggetto, text e done
4.inserisco dinamicamente il testo di ogni todo dentro il dom
5.assegno una classe tramite binding al bottone del check e all'icona check e utilizzo un operatore ternario
6.per il bottone check: se done è uguale a true allora gli assegno la classe dello sfondo black trasparente, altrimenti gli assegno la classe dello sfondo verde
7.per l'icona check: se done è uguale a true allora gli assegno la classe dell'icona a forma di x, altrimenti gli assegno la classe dell'icona a forma di check
8.su methods creo una funzione che mi servira per cancellare la task
9.creo una condizione in cui verifico tramite il metodo confirm se esso è uguale a true
10.se la condizione risulta vera allora rimuovo la todo tramite il metodo splice
11.creo una nuova funzione che mi servira per creare nuovi todo tramite un input
12.assegno l'attributo v-model per recuperare il valore dell'input
13.dentro la funzione creo un oggetto che conterra la proprieta text che a sua volta conterrà il valore dell'input, e la proprietà done che conterrà il valore false
14.pusho l'oggetto nell'array