<template>
  <div>
    <el-select
      v-model="selecionado"
      filterable
      placeholder="Selecione"
      clearable
      no-match-text="Nada encontrado"
    >
      <el-option
        class="seletor-nomes"
        v-for="(pokemon, index) in pokemons"
        :key="index"
        :label="pokemon.name"
        :value="pokemon.name"
      >
      </el-option>
    </el-select>
    <p></p>
  

  </div>
   
</template>

<script>
import {getPokeList} from "@/services/pokemonApi";
export default {
  data() {
    return {
      pokemons: [],
      selecionado: "",
    };
  },

  computed: {
    isValidPokemon: function () {
      function isvalid(obj) {
        return obj.name == this.selecionado;
      }

      return this.pokemons.filter(isvalid, this).length > 0;
    },
  },

  watch: {
      isValidPokemon: function()
      {
      
         this.$emit('pokemonSelecionado',this.selecionado)
      }
  },

  mounted() {
   getPokeList(151)
      .then((response) => (this.pokemons = response.data.results));
  }
  
};
</script>

<style scoped>
.seletor-nomes {
  text-transform: capitalize;
}
</style>