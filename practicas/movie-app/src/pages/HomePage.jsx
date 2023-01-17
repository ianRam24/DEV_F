import { useFetch } from "../hooks/useFetch";
import SearchInput from "../components/SearchInput";
import SerieCard from "../components/SerieCardCard";

import styles from "../styles/Homepage.module.css";
export default function HomePage() {
  const { data } = useFetch("https://api.tvmaze.com/search/shows?q=girls");
  return (
    <main className={styles.HomePage}>
      <h1 className={styles.title}>Series App</h1>
      <SearchInput />
      <div className={styles.cards}>
        {data.map(serie => (
          <SerieCard key={serie.show.id} serie={serie} />
        ))}
      </div>
    </main>
  );
}
