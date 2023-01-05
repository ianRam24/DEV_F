import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export const UserDetail = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useFetch(
    `https://dummyjson.com/users/${id}`
  );

  return (
    <section className="container">
      {isLoading && <p className="text-center">Loading</p>}
      {!isLoading && (
        <div className="row d-flex justify-content-center">
          <section className="col-sm-4">
            <article className="card text-dark">
              <img src={user.image} className="card-img-top" alt={user.name} />
              <div className="card-body">
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
                <p>
                  <b>Blood Type: </b>
                  {user.bloodGroup}
                </p>
                <p>
                  <b>Height: </b>
                  {user.height} cm
                </p>
              </div>
            </article>
          </section>
        </div>
      )}
    </section>
  );
};
