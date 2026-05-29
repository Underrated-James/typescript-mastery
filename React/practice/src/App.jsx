import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "./api/pokemon";
import { useSelector, useDispatch } from "react-redux";
import { toggleStats } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const showStats = useSelector((state) => state.ui.showStats);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["pokemon", "pikachu"],
    queryFn: fetchPokemon,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading Pokémon</p>;

  return (
    <div>
      <h1>{data.name}</h1>

      <img src={data.sprites.front_default} />

      <button onClick={() => refetch()}>
        Refetch Pokémon
      </button>

      <button onClick={() => dispatch(toggleStats())}>
        Toggle Stats
      </button>

      {showStats && (
        <ul>
          {data.stats.map((s) => (
            <li key={s.stat.name}>
              {s.stat.name}: {s.base_stat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}