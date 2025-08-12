import { httpClientPlugin } from '../plugins';

const url = 'https://pokeapi.co/api/v2';

export const getPokemonById = async (id: string) => {
  // return fetch(`${url}/pokemon/${id}`)
  //   .then((resp) => resp.json())
  //   .then((pokemon) => pokemon.name);

  try {
    const pokemon = await httpClientPlugin.get(`${url}/pokemon/${id}`);
    return pokemon.name;
  } catch (err) {
    throw new Error(`Pokemon not found with id ${id}`);
  }
};
