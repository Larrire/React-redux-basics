import './App.css';
import { useReduxSelector } from './redux/hooks/useReduxSelector'

function App() {

  const user = useReduxSelector(state => state.user);

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
