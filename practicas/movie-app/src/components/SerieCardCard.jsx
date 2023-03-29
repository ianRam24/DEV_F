import { Link } from "react-router-dom";
import styles from "../styles/Serie.module.css";
function SerieCard({ serie }) {
  const regex = /(<([^>]+)>)/gi;
  const result = serie.show.summary?.replace(regex, "");
  return (
    <Link to={`/shows/${serie.id}`}>
      <article className={styles.card}>
        <img
          className={styles.imgCard}
          src={serie.show.image.medium}
          alt={serie.show.name}
        />
        <p className={styles.cardDesc}>{result}</p>
      </article>
    </Link>
  );
}
export default SerieCard;
