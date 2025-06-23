<script setup lang="ts">
import PokemonCardList from '@/pokemons/components/PokemonCardList.vue'

import { useQuery } from '@tanstack/vue-query'

import { getPokemons } from '@/pokemons/helpers/get-pokemons'
import store from '@/stores/store'
useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons,
  select: (data) => {
    store.loaded(data)
  }
})
</script>

<template>
  <div>
    <h1>Pokemon List Native - {{ store.pokemons.count }}</h1>
    <span v-if="store.pokemons.isLoading">Loading...</span>
    <PokemonCardList :pokemons="store.pokemons.list" />
  </div>
</template>
