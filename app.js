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
  }
}).mount('#app');