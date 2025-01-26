<template>
  <main>
    <div>
      <router-link to="vif">Premier exercice, les v-if</router-link>
    </div>
    <div>
      <router-link to="velse">Deuxième exercice, les v-else</router-link>
    </div>
    <div>
      <router-link to="velseif">Troisième exercice, les v-else-if</router-link>
    </div>
    <div>
      <router-link to="vfor">Quatrième exercice, les v-for</router-link>
    </div>
    <div>
      <router-link to="final">Finalement, combinons le tout !</router-link>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>