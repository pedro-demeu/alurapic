<template>
  <nav>
    <ul>
      <li v-for="route in routes" v-bind:key="route">
        <router-link :to="route.path ? route.path : '/'">{{
          route.titulo
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['routes'],
  name: "menu"
};
</script>

<style>
</style>