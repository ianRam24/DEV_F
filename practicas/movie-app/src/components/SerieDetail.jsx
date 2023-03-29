import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export function SerieDetail() {
  const id = useParams();
  const { data } = useFetch(`https://api.tvmaze.com/shows/${id}`);
  return (
    <article className={styles.card}>
      <img
        className={styles.imgCard}
        src={serie.show.image.medium}
        alt={serie.show.name}
      />
      <p className={styles.cardDesc}>{result}</p>
    </article>
  );
}
