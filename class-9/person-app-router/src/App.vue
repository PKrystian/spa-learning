<template>
  <nav>
    <router-link to="/list">List of Persons</router-link> |
    <router-link to="/new">New Person</router-link>
  </nav>
  <router-view></router-view>
</template>

<script setup>
</script>

<style>
nav {
  padding: 1em;
}
</style>
