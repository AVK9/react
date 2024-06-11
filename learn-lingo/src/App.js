import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AppRouter } from './components/common/AppRouter';
import { Context } from 'index';
import { LoaderPercent } from 'components/Loader/LoaderPercent';

export const App = () => {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <LoaderPercent />;
  }

  return (
    <>
      <AppRouter />
    </>
  );
};
