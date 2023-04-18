<template>
  <div>
        <v-row>
          <v-col>
            <v-text-field
              class="ml-4 mr-4 mt-4 mb-4"
              outlined
              dense
              clearable
              v-model="buscar"
              label="Digite aqui para buscar um hino..."
              hint="Você pode buscar pelo número, título ou trecho do hino"
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
   </div>
</template>

<script lang="ts">
import Vue from "vue";
import { hinos } from "@/assets/hinosHarpa";
import { Preferences } from '@capacitor/preferences';

export default Vue.extend({
  name: "HC_Home",
  data() {
    return {
      items: hinos,
      backup: hinos,
      buscar: "",
      abrirModal: false,
      fab: false,
    };
  },
  async mounted() {
    var historico  = (await Preferences.get({key: 'busca'})).value;
    if (historico){
      this.buscar = historico
    }
  },
  watch: {
    async buscar() {
      this.items = this.backup.filter(
        (x) =>
          x.conteudo.toUpperCase().includes(this.buscar.toUpperCase()) ||
          x.id == Number.parseInt(this.buscar) ||
          x.titulo.toUpperCase().includes(this.buscar.toUpperCase())
      );
      await Preferences.set({
          key: 'busca',
          value: this.buscar,
        });
    },
  },
  methods: {
    async hinoSelecionado(idHino: number) {
      this.$router.push({ name: "hino", params: { id: idHino.toString() } });
    },
  },
});
</script>

