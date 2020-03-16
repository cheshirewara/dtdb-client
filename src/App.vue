<template>
  <v-app>

    <Drawer :drawer.sync="state.drawer" />
    <AppBar :drawer.sync="state.drawer" />

    <v-content>
      <router-view />
    </v-content>

    <Footer :app-name="appname" />

  </v-app>
</template>

<script>
import AppBar from '@/components/TheAppBar'
import Drawer from '@/components/TheDrawer'
import Footer from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    AppBar,
    Drawer,
    Footer
  },
  data: () => ({
    appname: 'DTDB',
    state: {
      drawer: false,
    }
    //
  }),
}
</script>

