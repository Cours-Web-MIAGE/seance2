<template>
  <a href="/">&lt; Retour</a>

  <div>{{ counter }}</div>
  <button @click="counter++">Incrémenter</button>
  <button @click="counter--">Décrémenter</button>

  <!-- Insert the content of the "message" variable in a div if counter is strictly greater than ten -->

</template>

<script setup>
import { ref } from "vue";

const counter = ref(0);
const message = ref('Félicitations ! Vous avez dépassé dix !');
</script>