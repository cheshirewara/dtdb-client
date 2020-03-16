<template>
  <v-footer color="primary lighten-1" padless >

    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link.name" color="white" text rounded class="my-2" :to="link.link">
        {{ link.name }}
      </v-btn>
      <v-col cols="12" class="primary lighten-2 py-4 text-center white--text">
        ©{{ new Date().getFullYear() }} - {{appName}}
      </v-col>
    </v-row>
    
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',

  props: {
    appName: String
  },

  data: () => ({
    links: [
      {name: 'HOME', link: '/'},
      {name: 'ABOUT', link: '/about'},
    ],
  }),
}
</script>
