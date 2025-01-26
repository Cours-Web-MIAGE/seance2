<template>
  <a href="/">&lt; Retour</a>

  <div>{{ counter }}</div>
  <button @click="counter++">Incrémenter</button>
  <button @click="counter--">Décrémenter</button>

  <!-- Display the content of the congratulations variable if counter is strictly greater than 20 -->

  <!-- else insert the content of the "message" variable in a div if counter is strictly greater than ten -->

  <!-- ELSE display the content of the "notEnough" variable -->
   
</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const congratulations = ref('Whao ! Le compteur est à 20 !');
const message = ref('Félicitations ! Vous avez dépassé dix !');
const notEnough = ref('Toujours pas assez ! Continuez d\'incrémenter');
</script>