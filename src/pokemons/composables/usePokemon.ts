import { useQuery } from '@tanstack/vue-query';
import { getPokemonById } from '@/pokemons/helpers/get-pokemon-by-id';

export const usePokemon = (id: string) => {
    const { isLoading, data: pokemon, isError, error } = useQuery({
        queryKey: ['pokemon', id],
        queryFn: () => getPokemonById(id),
    });
    return {
        isError,
        error,
        isLoading,
        pokemon,
    }
}
