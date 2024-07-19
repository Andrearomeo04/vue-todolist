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
    }
}).mount('#app')