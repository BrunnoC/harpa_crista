<template>
  <v-app overflow-hidden>
    <v-system-bar
      height="30"
      color="#009688"
      lights-out
    ></v-system-bar>
    <hcHeader></hcHeader>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import hcHeader from '../src/components/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    hcHeader,
  },
  data: () => ({
    isHome: false
  }),
  watch: {
    '$route.name': {
      handler: function (name) {
        console.log(name)
        this.isHome = name == 'home' ? true : false;
      }
    }
  }
});
</script>

<style scoped>
</style>