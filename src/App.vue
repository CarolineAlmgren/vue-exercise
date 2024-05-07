<script setup lang="ts">
import { Todo } from './models/Todos';
import Button from './components/Button.vue';
import Input from './components/Input.vue';
const showP = true;
const todos: Todo[]= [new Todo("Städa:"), new Todo("Tvätta:"), new Todo("Handla:")]
const numbers: number[]=[1,2,3,4,5,6,7]
</script>

<template>
<div>
  <Input />
  <Button />
</div>

<div>
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
    {{ todo.done ? 'gjort': 'ogjort' }}
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
<div>
  <p v-if="showP">Hej Carro!</p>
  <span v-else>Hejdå Carro!</span>
</div>
</template>

<style scoped>
  ul{
    list-style-type: none;
  }
</style>
