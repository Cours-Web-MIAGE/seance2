<template>
  <!-- Insert an SVG tag -->

    <!--
      In this SVG tag, create a RECT tag for each instance of the "blocks" array,
      each property is going to be bound to the corresponding ones in the rectangle.
      * if a block is marked as "deleted", do NOT display it in the interface.
      * if a block is marked as "active", displayed it in green, else display it in blue.
    -->
</template>

<script setup>
import { ref } from "vue";

const blocks = ref([
  { x: 0, y: 0, width: 100, height: 100 },
  { x: -100, y: 200, width: 200, height: 200, deleted: true },
  { x: 300, y: 200, width: 100, height: 50 },
  { x: 300, y: 500, width: 100, height: 100, active: true },
]);
</script>