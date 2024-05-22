<script>
import { reactive, computed } from 'vue';

export default {
  name: 'PersonOptionsAPI',
  data() {
    return {
      person: reactive({
        firstName: '',
        lastName: '',
      }),
      people: [],
    };
  },
  methods: {
    addPerson() {
      this.people.push({ ...this.person });
      this.person.firstName = '';
      this.person.lastName = '';
    },
  },
  computed: {
    peopleCount() {
      return computed(() => this.people.length);
    },
  },
};
</script>

<template>
  <form @submit.prevent="addPerson">
    <input v-model="person.firstName" placeholder="First Name" />
    <input v-model="person.lastName" placeholder="Last Name" />
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