import { AuthProvider } from './contexts/AuthProvider';
import Routes from './routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <Routes />
      <ToastContainer autoClose={1000} />
    </AuthProvider>
  );
}

export default App;
