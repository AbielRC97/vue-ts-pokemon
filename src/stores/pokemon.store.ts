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

