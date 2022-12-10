import React from 'react';

export default function User({ name, lastName, image }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{(name, lastName)}</h5>
      </div>
    </div>
  );
}
