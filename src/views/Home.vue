<template>
  <el-container class="container">
    <Progresso :etapa="etapa" />

    <el-main>
      <transition name="el-zoom-in-center">
        <div v-if="etapa == 0">
          <el-header><p>Selecione um Pokemon </p></el-header>

          <ListaPokemons v-on:pokemonSelecionado="selecionouPokemon"/>
        </div>
      </transition>
      <transition name="el-zoom-in-center">
        <div v-if="etapa > 0"  v-loading.fullscreen.lock="carregando">
          <el-row :gutter="20">
            <el-col :span="16">
              <img :src="pokemon.sprites.front_default" class="image" />
              <img :src="pokemon.sprites.back_default" class="image" />
              <img :src="pokemon.sprites.front_shiny" class="image" />
              <img :src="pokemon.sprites.back_shiny" class="image" />
            </el-col>
            <el-col :span="8" class="detalhes">
              <p><strong>{{ pokemon.name.toUpperCase() }}</strong></p>
              <p>Altura: {{ pokemon.height }} "</p>
              <p>Peso: {{ pokemon.weight }}lbs</p>
              <p>Espécie: {{pokemon.species.name}}</p>
              <p>Tipos: 
                <ul>
                  <li v-for="(tipo, index) in pokemon.types" :key="index">{{ tipo.type.name }}</li>
                </ul>

              </p>
            </el-col>
          </el-row>
        </div>
      </transition>

      <transition name="el-zoom-in-center">
        <el-button v-if="etapa > 0" @click="etapa=0" type="warning"
          >Voltar</el-button
        >
      </transition>
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
// @ is an alias to /src

import ListaPokemons from "@/components/listaPokemons";
import Footer from "@/components/footer";
import Progresso from "@/components/progresso";
import pokemonApi from "@/services/pokemonApi";

export default {
  name: "Home",
  components: {
    Progresso,
    ListaPokemons,
    Footer,
  },

  data() {
    return {
      pokemon: [],
      etapa: 0,
      carregando: false,
    };
  },
  methods: {
    selecionouPokemon: function (pokemon) {
      this.carregando = true;
      this.etapa = 2;
      pokemonApi.get(`pokemon/${pokemon}`).then((response) => {
        this.pokemon = response.data;
        console.log(this.pokemon);

        this.carregando = false;
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  min-height: 80vh;
  align-content: center;
  justify-content: center;
  text-align: center;
  margin-left: 5vw;
  margin-right: 5vw;
}
.detalhes {
  text-align: left;
}
</style>
