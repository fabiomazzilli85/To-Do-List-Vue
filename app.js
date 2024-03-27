const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: 'Contattare il servizio clienti Vodafone', done: true },
        { text: 'Inviare email al team aziendale', done: false },
        { text: 'Chiamare papà e mamma per chiedere come stanno', done: true },
        { text: 'Comprare il latte', done: false },
        { text: 'Studiare gli appunti su Vue.JS in vista della riunione', done: true }
      ]
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') { // IF il nuovo contenuto non contiene spazi
        this.todos.push({ text: this.newTodo, done: false }); // Viene pushato nella newTodo (v-model HTML) e la done è ovviamente False. 
        this.newTodo = '';  // Pulisco il campo di ricerca
      }
    },
    removeItem(index) {
      this.todos.splice(index, 1);
    }
  }
}).mount('#app');