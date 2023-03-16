<template>
  <v-container>
    <v-card>
      <v-card-title>{{ hino?.id + ' - ' + hino?.titulo }}</v-card-title>
      <v-card-text>
        <div v-html="hino?.conteudo"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { hinos } from "@/assets/hinosHarpa";
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      hino: hinos.find((x) => x.id == Number.parseInt(this.$route.params.id)),
      numeroDoHino: parseInt(this.$route.params.id),
    };
  },
});
</script>
