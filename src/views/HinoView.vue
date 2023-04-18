<template>
    <div>
        <v-card tile>
        <v-card-title>{{ hino?.id + " - " + hino?.titulo }}</v-card-title>
        <v-card-text>
          <p
            class="hino"
            :style="{ fontSize: tamanhoFonte + 'em' }"
            v-html="hino?.conteudo"
          ></p>
        </v-card-text>
        <v-footer app fixed padless :elevation="4">
          <v-card flat tile width="100%" class="text-center">
            <v-card-text>
              <v-btn icon class="mx-4" @click="atualizarTamanhoFonte(1)">
                <v-icon size="24px">mdi-magnify-plus-outline</v-icon>
              </v-btn>
              <v-btn icon class="mx-4" @click="atualizarTamanhoFonte(-1)">
                <v-icon size="24px">mdi-magnify-minus-outline</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-footer>
      </v-card>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
import { hinos } from "@/assets/hinosHarpa";

export default Vue.extend({
    data() {
        return {
            id: this.$route.params.id,
            items: hinos,
            hino: hinos[0],
            tamanhoFonte: 1,

        }
    },
    mounted(){
        var hino = this.items.find((x) => x.id.toString() == this.id)
        if (hino){
          this.hino = hino
        }
    },
    methods: {
        atualizarTamanhoFonte(incremento: number) {
      if (incremento == -1) {
        if (this.tamanhoFonte > 1) this.tamanhoFonte += incremento;
      } else if (incremento == 1) {
        if (this.tamanhoFonte < 5) this.tamanhoFonte += incremento;
      }
    },
    }
})
</script>

<style scoped>
.hino {
  line-height: 1;
}
</style>
