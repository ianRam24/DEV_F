import useFetch from '../hooks/useFetch';
import User from './User';
import '../styles/App.css';

function App() {
  const {
    data: { users },
    isLoading,
  } = useFetch('https://dummyjson.com/users');
  return (
    <section className="container py-4">
      {isLoading && <p>Loading</p>}
      {!isLoading && (
        <div className="row gy-4" style={{ margin: '0 auto' }}>
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
