<script setup>
  import { ref, computed } from 'vue';

  const firstName = ref('');
  const lastName = ref('');
  const people = ref([]);

  const addPerson = () => {
    people.value.push({ firstName: firstName.value, lastName: lastName.value });
    firstName.value = '';
    lastName.value = '';
  };

  const peopleCount = computed(() => people.value.length);
</script>

<template>
  <form @submit.prevent="addPerson">
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <button type="submit">Add Person</button>
  </form>
  <ul>
    <li v-for="(person, index) in people" :key="index">
      {{ person.firstName }} {{ person.lastName }}
    </li>
  </ul>
  <p>Total people: {{ peopleCount }}</p>
</template>

<style scoped>

</style>