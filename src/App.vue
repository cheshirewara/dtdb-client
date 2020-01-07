<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <v-app-bar-nav-icon />
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40" />
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100" />
      </div> -->
      <v-toolbar-title>{{ app_title }}</v-toolbar-title>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text>
        <span class="mr-2">LR</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
    <v-footer
      color="primary lighten-1"
      padless>
      <v-row
        justify="center"
        no-gutters>
        <v-btn
          color="white"
          text
          rounded
          to="/"
          class="my-2">
          Home
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          to="/about"
          class="my-2">
          About
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          to="/page1"
          class="my-2">
          Page1
        </v-btn>
        <v-btn
          color="white"
          text
          rounded
          to="/page2"
          class="my-2">
          Page2
        </v-btn>
        <!-- <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          to="link"
          class="my-2">
          {{ link }}
        </v-btn> -->
        <v-col
          class="primary lighten-2 py-4 text-right white--text"
          cols="12">
          <div>
            &copy; 2019 - {{ new Date().getFullYear() }} — {{ app_title }}
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
    links: [
      'Home',
      'about',
      'page1',
      'page2'
    ],
    app_title: 'DTDB　'
  })
}
</script>
