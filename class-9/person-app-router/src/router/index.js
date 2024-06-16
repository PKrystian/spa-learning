import { createRouter, createWebHistory } from 'vue-router'
import PersonList from '../components/PersonList.vue'
import PersonForm from '../components/PersonForm.vue'

const routes = [
    { path: '/list', component: PersonList, props: { title: 'List of Persons' } },
    { path: '/new', component: PersonForm, props: { title: 'New Person' } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
