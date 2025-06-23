<script setup lang="ts">
import store from '@/stores/store';

</script>

<template>
  <div>
    <h1>Pokemon List Native - {{ store.pokemons.count }}</h1>
    <span v-if="store.pokemons.isLoading">Loading...</span>
    <PokemonCardList :pokemons="store.pokemons.list" />
  </div>
</template>

