<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useQueryClient  } from '@tanstack/vue-query';
import type { Pokemon } from '../interfaces/pokemon';
import { getPokemonById } from '@/pokemons/helpers/get-pokemon-by-id';

interface Props {
  pokemon: Pokemon;
}
const router = useRouter();
const props = defineProps<Props>();
const queryClient = useQueryClient();

const goTo = () => {
  router.push({
    name: 'pokemon-id',
    params: {
      id: props.pokemon.id
    }
  })
}

const preFetchPokemon = ( )=>{
  queryClient.prefetchQuery({
    queryKey: ['pokemon', props.pokemon.id.toString()],
    queryFn: () => getPokemonById(props.pokemon.id.toString()),
  });
}
</script>

<template>
  <div class="pokemon-card" @click="goTo" @mouseenter="preFetchPokemon">
    <img :src="pokemon.frontSprite" :alt="pokemon.name">
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>


<style scoped>
.pokemon-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  pointer-events: auto;
}

img {
  width: 150px;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>