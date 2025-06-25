import type { Pokemon, PokemonResponse } from '@/pokemons/interfaces/index';
import PokemonApi from '@/pokemons/api/PokemonApi';
export const getPokemonById = async (id: string): Promise<Pokemon> => {
    const { data } = await PokemonApi.get<PokemonResponse>(`/pokemon/${id}`);
    return {
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.front_default,
    }
}