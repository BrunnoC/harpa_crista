<template>
  <div>
    <v-card>
      <v-card-title>Hinos</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field
              solo
              v-model="buscar"
              label="Buscar"
              color="#009688"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-simple-table fixed-header height="60vh">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Número</th>
                <th class="text-left">Título</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in items"
                :key="item.id"
                @click="hinoSelecionado(item.id)"
              >
                <td>{{ item.id }}</td>
                <td>{{ item.titulo }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-dialog
      v-model="abrirModal"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar flat dark color="teal lighten-3">
          <v-btn icon dark @click="abrirModal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{
            hino?.id + " - " + hino?.titulo
          }}</v-toolbar-title>
        </v-toolbar>
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
    </v-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { hinos } from "@/assets/hinosHarpa";
export default Vue.extend({
  name: "HC_Home",
  data() {
    return {
      items: hinos,
      hino: hinos.find((x) => x.id == 1),
      backup: hinos,
      buscar: "",
      abrirModal: false,
      tamanhoFonte: 1,
      fab: false,
    };
  },
  watch: {
    buscar() {
      this.items = this.backup.filter(
        (x) =>
          x.conteudo.toUpperCase().includes(this.buscar.toUpperCase()) ||
          x.id == Number.parseInt(this.buscar) ||
          x.titulo.toUpperCase().includes(this.buscar.toUpperCase())
      );
    },
  },
  methods: {
    atualizarTamanhoFonte(incremento: number) {
      if (incremento == -1) {
        if (this.tamanhoFonte > 1) this.tamanhoFonte += incremento;
      } else if (incremento == 1) {
        if (this.tamanhoFonte < 5) this.tamanhoFonte += incremento;
      }
    },
    hinoSelecionado(id: number) {
      this.hino = this.items.find((x) => x.id == id);
      this.abrirModal = true;
    },
  },
});
</script>

<style scoped>
.hino {
  line-height: 1;
}
</style>
