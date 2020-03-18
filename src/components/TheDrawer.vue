<template>
  <v-navigation-drawer app v-model="innerDrawer" 
    :clipped="$vuetify.breakpoint.lgAndUp">

    <v-list dense>

      <v-list-item v-for="item in items" :key="item.txt">

        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean
    }
  },
  data: () => ({
    items: [
      { icon: 'mdi-contacts', text: 'Contacts' },
      { icon: 'mdi-history', text: 'Frequently contacted' },
      { icon: 'mdi-content-copy', text: 'Duplicates' },
      { icon: 'mdi-cog', text: 'Settings' },
      { icon: 'mdi-message', text: 'Send feedback' },
      { icon: 'mdi-help-circle', text: 'Help' },
      { icon: 'mdi-cellphone-link', text: 'App downloads' },
      { icon: 'mdi-keyboard', text: 'Go to the old version' }
    ]
  }),
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