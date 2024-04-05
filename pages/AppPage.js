// pages/AppPage.js
"use client"
import React, { useState, useEffect } from 'react';
import { getAllPokemon } from './api/getData';
import { useClient } from 'next/client'; // Importa useClient desde next/client

export default function AppPage() {
  useClient(); // Marca este componente como un componente del cliente
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allPokemon = await getAllPokemon();
        setPokemonList(allPokemon);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Listado de Pokémon en la página de la aplicación</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}
