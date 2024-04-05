// getData.js
import axios from 'axios';

export async function getAllPokemon() {
  try {
    let allPokemon = [];
    let nextUrl = 'https://pokeapi.co/api/v2/pokemon';
    
    while (nextUrl) {
      const response = await axios.get(nextUrl);
      allPokemon = [...allPokemon, ...response.data.results];
      nextUrl = response.data.next;
    }

    return allPokemon;
  } catch (error) {
    console.error('Error al obtener datos de Pokémon:', error);
    return null;
  }
}
