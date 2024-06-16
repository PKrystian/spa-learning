<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="person in people" :key="person.id">{{ person.firstName }} {{ person.lastName }}</li>
    </ul>
    <p>Total people: {{ peopleCount }}</p>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from '../store'

const props = defineProps({
  title: String
})

const store = useStore()
const people = computed(() => store.people)
const peopleCount = computed(() => store.people.length)
</script>
