import { reactive } from "vue";
import type { Pokemon } from "@/pokemons/interfaces";
import { getPokemons } from "@/pokemons/helpers/get-pokemons";

interface Store {
    //State: 
    pokemons: {
        list: Pokemon[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage?: string | null;
    },
    // Actions:
    start: () => Promise<void>;
    loaded: (pokemons: Pokemon[]) => void;
    error: (errorMessage: string | null) => void;
}

const store = reactive<Store>({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: null,
    },
    start: async function (): Promise<void> {
        const data = await getPokemons();
        this.loaded(data);
    },
    loaded: function (pokemons: Pokemon[]) {
        this.pokemons = {
            list: pokemons,
            count: pokemons.length,
            isLoading: false,
            hasError: false,
            errorMessage: null
        }
    },
    error: function (errorMessage: string | null) {
        this.pokemons = {
            ...this.pokemons,
            isLoading: false,
            hasError: true,
            errorMessage: errorMessage
        }
    }

});

export default store;
