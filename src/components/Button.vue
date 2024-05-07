<script setup lang="ts">
const msg = "Sök"
const handleClick = () => {
  console.log("Knappen klickades!");
};
</script>

<template>
  <button @click="handleClick" class="clickBtn">
  {{ msg }}
  </button>
</template>

<style scope>
.clickBtn{
    background-color: bisque;
    color: black;
  }
</style>