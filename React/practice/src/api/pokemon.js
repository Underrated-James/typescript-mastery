export const fetchPokemon = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon/pikachu"
  );

  if (!res.ok) throw new Error("Failed fetch");

  return res.json();
};