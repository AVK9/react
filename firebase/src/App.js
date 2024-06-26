import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { AppRouter } from './components/AppRouter';
import { Context } from '.';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useContext } from 'react';
import { Loader } from './components/Loader';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
