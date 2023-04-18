<template>
  <v-app-bar
    app
    prominent
    shrink-on-scroll
    fade-img-on-scroll
    color="teal lighten-3"
    dark
    src="@/assets/imagem.jpg"
  >
    <v-btn v-if="!isHome" icon class="hidden-xs-only" @click="voltar()">
    <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-toolbar-title>Harpa Cristã</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "hc_Header",
  data() {
    return {
      isHome: true,
    };
  },
  watch: {
    "$route.name": {
      handler: function (name: string) {
        this.isHome = name == "home" ? true : false;
      },
    },
  },
  methods: {
    voltar(){
      this.$router.back();
    }
  }
});
</script>
