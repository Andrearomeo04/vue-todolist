const { createApp } = Vue

createApp({
    data() {
        return {
            todolist: [
                { 
                  text: 'Fare colazione', 
                  done: false 
                },
                { 
                  text: 'Andare a lavoro', 
                  done: false 
                },
                { 
                  text: 'Fare la spesa', 
                  done: false 
                },
                { 
                  text: 'Preparare il pranzo', 
                  done: false 
                },
                { 
                  text: 'Fare esercizio fisico', 
                  done: false 
                },
                { 
                  text: 'Controllare le email', 
                  done: false 
                },
                { 
                  text: 'Preparare la cena', 
                  done: false 
                }
              ]
        }
    },
    methods: {
        deletetask (index) {
            if(confirm('ATTENZIONE, STAI PER CANCELLARE QUESTA TASK, QUESTA AZIONE è IRREVERSIBILE. SEI SICURO DI VOLER CONTINUARE?'))
                this.todolist.splice(index, 1)
        }
    }
}).mount('#app')    