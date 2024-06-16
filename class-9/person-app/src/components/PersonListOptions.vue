<template>
  <div>
    <form @submit.prevent="addPerson">
      <input v-model="firstName" placeholder="First Name" />
      <input v-model="lastName" placeholder="Last Name" />
      <button type="submit">Add Person</button>
    </form>
    <ul>
      <li v-for="person in people" :key="person.id">{{ person.firstName }} {{ person.lastName }}</li>
    </ul>
    <p>Total people: {{ peopleCount }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      people: []
    }
  },
  computed: {
    peopleCount() {
      return this.people.length
    }
  },
  methods: {
    addPerson() {
      if (this.firstName && this.lastName) {
        this.people.push({ id: Date.now(), firstName: this.firstName, lastName: this.lastName })
        this.firstName = ''
        this.lastName = ''
      }
    }
  }
}
</script>
