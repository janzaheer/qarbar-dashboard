<template>
    <button class="scroll-button" @click="scrollToTop"><i class="fa-solid fa-angle-up"></i></button>
  </template>
  
  <script>
  import { scrollTo } from 'vue-scrollto';
  
  export default {
    name: 'ScrollButton',
    methods: {
      scrollToTop() {
        scrollTo('#app', 500, { easing: 'ease-in-out' }); // Replace '#app' with the element you want to scroll to
      },
    },
  };
  </script>
  
  <style scoped>
  .scroll-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: rgb(255, 69, 0);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .scroll-button:hover {
    background-color: rgb(247, 108, 57);
  }
  </style>