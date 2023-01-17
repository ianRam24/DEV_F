import styles from "../styles/Serie.module.css";
function SerieCard({ serie }) {
  const regex = /(<([^>]+)>)/gi;
  const result = serie.show.summary?.replace(regex, "");
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
export default SerieCard;
