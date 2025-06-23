<script setup lang="ts">
import PokemonCardList from '@/pokemons/components/PokemonCardList.vue';
import { usePokemons } from '@/pokemons/composables/usePokemons';
const { pokemons, count, isLoading } = usePokemons();
</script>

<template>
  <div>
    <h1>Pokemon List - {{ count }}</h1>
    <span v-if="isLoading">Loading...</span>
    <PokemonCardList :pokemons="pokemons ?? []" />
  </div>
</template>

