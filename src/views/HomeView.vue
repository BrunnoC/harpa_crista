<template>
  <v-container>
    <v-card>
      <v-card-title>Hinos</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-text-field v-model="buscar" label="Buscar" color="#009688"></v-text-field>
          </v-col>
        </v-row>
        <v-simple-table height="50vh">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Número</th>
                <th class="text-left">Título</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.id" @click="hinoSelecionado(item.id)">
                <td>{{ item.id }}</td>
                <td>{{ item.titulo }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { hinos } from "@/assets/hinosHarpa";
export default Vue.extend({
  name: "HC_Home",
  data() {
    return {
      items: hinos,
      backup: hinos,
      buscar: ''
    };
  },
  watch: {
    buscar(){
      this.items = this.backup.filter(x => x.conteudo.toUpperCase().includes(this.buscar.toUpperCase()) 
        || x.id == Number.parseInt(this.buscar) || x.titulo.toUpperCase().includes(this.buscar.toUpperCase()) )
    }
  },
  methods: {
    hinoSelecionado(id: number) {
      this.$router.push({ path: `hino/${id}`});
    },
  },
});
</script>
