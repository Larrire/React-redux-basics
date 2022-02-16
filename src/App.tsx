import React from 'react';
import { useDispatch } from 'react-redux';
import { useReduxSelector } from './redux/hooks/useReduxSelector'
import { setName, setAge } from './redux/reducers/userReducer';
import { setThemeStatus } from './redux/reducers/themeReducer';
import './App.css'

function App() {
  const dispatch = useDispatch();

  const user = useReduxSelector(state => state.user);
  const theme = useReduxSelector(state => state.theme);

  const changeName = (newName: string) => dispatch( setName(newName) );
  const changeAge = (newAge: number) => dispatch( setAge(newAge) );
  const switchTheme = (newTheme: string) => dispatch( setThemeStatus(newTheme) );

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  }

  const handleAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAge(parseInt(e.target.value));
  }

  const handleSwitchTheme = () => {
    switchTheme(theme.status === 'light' ? 'dark' : 'light')
  }

  return (
    <main className={ theme.status === 'dark' ? 'dark-theme' : '' }>
      <h1>Ola, meu nome é {user.name} e tenho {user.age} anos.</h1>
      <h2>Tema: {theme.status}</h2>

      <hr />

      <input type="text" value={user.name} onChange={handleNameInput} />
      <input type="number" value={user.age} onChange={handleAgeInput} />

      <hr />

      <button onClick={handleSwitchTheme}>Switch theme</button>
    </main>
  );
}

export default App;
