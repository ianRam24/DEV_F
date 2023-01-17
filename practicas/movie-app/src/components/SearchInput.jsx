import { useRef } from "react";
import { useFetch } from "../hooks/useFetch";
import styles from "../styles/SearchInput.module.css";

export default function SearchInput() {
  const inputRef = useRef();
  const { setData } = useFetch();
  const handleSubmit = e => {
    const query = inputRef.current.value;
    console.log(query);
    e.preventDefault();
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(res => res.json())
      .then(setData);
  };

  return (
    <div className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className={styles.searchInput}
          type="text"
          placeholder="Search for a serie"
        />
      </form>
    </div>
  );
}
