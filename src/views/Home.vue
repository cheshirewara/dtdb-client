<template>
  <v-content>
    <v-container>
      <h1>Home</h1>
    </v-container>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </v-content>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
