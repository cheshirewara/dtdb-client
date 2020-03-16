<template>
  <v-container>
    <!-- <HomeMenu /> -->
    {{categories}}
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HomeMenu from '@/components/HomeMenu'
import CallCategory from '@/mixins/CallCategory.js'

export default {

  name: 'Home',
  // components: {
  //   HomeMenu
  // },
  data: ()=>({}),
  methods: {},
  mounted() {},
  mixins: [CallCategory],
}
</script>
