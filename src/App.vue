<template>
  <v-app overflow-hidden>
    <hcHeader></hcHeader>
    <v-main>
      <router-view/>
    </v-main>
    <botton-navigation></botton-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import hcHeader from '../src/components/Header.vue'
import BottonNavigation from './components/BottonNavigation.vue';

export default Vue.extend({
  name: 'App',
  components: {
    hcHeader,
    BottonNavigation
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