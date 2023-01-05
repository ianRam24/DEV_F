import useFetch from "../hooks/useFetch";
import User from "./User";
import "../styles/index.css";
import { useRef } from "react";

function App() {
  const searchRef = useRef();
  const {
    data: { users },
    isLoading,
    setData,
  } = useFetch("https://dummyjson.com/users");

  const handleSubmit = e => {
    e.preventDefault();
    const query = searchRef.current.value;
    fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then(res => res.json())
      .then(setData);
  };
  return (
    <>
      <section className="container py-4">
        <form className="d-flex gap-3 mb-4" onClick={handleSubmit}>
          <input
            ref={searchRef}
            type="search"
            className="form-control"
            placeholder="Search for a user"
          />
          <button className="btn btn-danger">Search</button>
        </form>
        {isLoading && <p className="text-center">Loading</p>}
        {!isLoading && (
          <div className="row gy-4">
            {users.map(user => (
              <div key={user.id} className="col-12 col-md-3 col-sm-6">
                <User {...user} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default App;
