import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {

  const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <h1>Ola, meu nome é {user.name} e tenho {user.age} anos.</h1>
      <h2>Tema ...</h2>

      <hr />

      <input type="text" value={user.name} />

      <hr />

      <button>Switch theme</button>
    </>
  );
}

export default App;
