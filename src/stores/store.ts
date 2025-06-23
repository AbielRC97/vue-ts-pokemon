import { reactive } from "vue";
import type { Pokemon } from "@/pokemons/interfaces";

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
    start: () => void;
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
    start: function () { },
    loaded: function (pokemons: Pokemon[]) { },
    error: function (errorMessage: string | null) { }

});

export default store;
