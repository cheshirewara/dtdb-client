<template>
  <v-app-bar app dark color="primary"
    :clipped-left="$vuetify.breakpoint.lgAndUp">

    <v-app-bar-nav-icon @click.stop="innerDrawer = !innerDrawer" />

    <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
      <span class="hidden-sm-and-down">Google Contacts</span>
    </v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" item>
        <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify" />
      </v-avatar>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',

  props: {
    drawer: {
      type: Boolean
    } 
  },

  data: () => ({}),
  computed: {
    innerDrawer: {
      get(){
        return this.drawer
      },
      set(val){
        this.$emit('update:drawer', val)
      }
    }
  }
}
</script>