<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="addPerson">
      <input v-model="firstName" placeholder="First Name" />
      <input v-model="lastName" placeholder="Last Name" />
      <button type="submit">Add Person</button>
    </form>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from '../store'

const props = defineProps({
  title: String
})

const firstName = ref('')
const lastName = ref('')
const store = useStore()
const router = useRouter()

const addPerson = () => {
  if (firstName.value && lastName.value) {
    store.addPerson({id: Date.now(), firstName: firstName.value, lastName: lastName.value})
    firstName.value = ''
    lastName.value = ''
    router.push('/list')
  }
}
</script>
