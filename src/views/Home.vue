<template>
  <!-- <v-container> -->
    <HomeMenu :category="categories"/>
    <!-- {{categories}} -->
  <!-- </v-container> -->
</template>

<script>
// @ is an alias to /src
import HomeMenu from '@/components/HomeMenu'
import GetCategory from '@/mixins/GetCategory.js'

export default {

  name: 'Home',
  components: {
    HomeMenu
  },
  data: ()=>({}),
  methods: {},
  mounted() {},
  mixins: [GetCategory],
}
</script>
