import React from 'react';
import { useDispatch } from 'react-redux';
import { useReduxSelector } from './redux/hooks/useReduxSelector'
import { setName, setAge } from './redux/reducers/userReducer';

function App() {
  const dispatch = useDispatch();

  const user = useReduxSelector(state => state.user);

  const changeName = (newName: string) => dispatch( setName(newName) );
  const changeAge = (newAge: number) => dispatch( setAge(newAge) );

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  }

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAge(parseInt(e.target.value));
  }

  return (
    <>
      <h1>Ola, meu nome é {user.name} e tenho {user.age} anos.</h1>
      <h2>Tema ...</h2>

      <hr />

      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="number" value={user.age} onChange={handleAgeInput} />

      <hr />

      <button>Switch theme</button>
    </>
  );
}

export default App;
