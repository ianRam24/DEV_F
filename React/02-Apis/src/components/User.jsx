import { Link } from "react-router-dom";

export default function User({ name, lastName, image, email, id }) {
  return (
    <Link to={`/user/${id}`} className="text-decoration-none">
      <div className="card text-dark">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h3 className="card-title">{(name, lastName)}</h3>
          <h4 className="card-text">{email}</h4>
        </div>
      </div>
    </Link>
  );
}
