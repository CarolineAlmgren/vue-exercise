<script setup lang="ts">
import { Todo } from './models/Todos';
import Button from './components/Button.vue';
let showP = false;
const todos: Todo[]= [new Todo("Städa:"), new Todo("Tvätta:"), new Todo("Handla:")]
const numbers: number[]=[1,2,3,4,5,6,7]
</script>

<template>
<div>
  <Button />
</div>

<div>
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
    {{ todo.done }}
  </li>
</ul>
</div>
<div>
  <ul>
    <li v-for="number in numbers">
    {{ number }}
    </li>
  </ul>
</div>
</template>

<style scoped>
  ul{
    list-style-type: none;
  }
</style>
