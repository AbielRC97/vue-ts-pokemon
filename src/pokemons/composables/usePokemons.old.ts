import { ref, computed, onMounted } from 'vue';
import type { Pokemon } from '@/pokemons/interfaces/index';
import { getPokemons } from '@/pokemons/helpers/get-pokemons';

export const usePokemons = () => {
    const pokemons = ref<Pokemon[]>([]);
    const isLoading = ref(true);

    onMounted(async () => {
        const data = await getPokemons();
        pokemons.value = data;
        isLoading.value = false;
    });


    return {
        isLoading,
        pokemons,
        count: computed(() => pokemons.value.length),
    }
}