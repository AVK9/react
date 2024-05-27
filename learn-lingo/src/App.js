// import { Write } from './components/Write';
// import Read from './components/Read';
// import UpdateRead from './components/UpdateRead';
// import UpdateWrite from './components/UpdateWrite';
// import { SignUp } from 'pages/SignUp';
// import { useContext } from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Header } from 'components/Header/Header';
import { AppRouter } from './components/common/AppRouter';
// import { Context } from '../';

export const App = () => {
  // const { auth } = useContext(Context);
  // const [user, loading, error] = useAuthState(auth);

  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};
// eslint-disable-next-line no-lone-blocks
{
  /* <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
          <Route path="/updateread" element={<UpdateRead />} />
          <Route path="/registration" element={<SignUp />} />
          <Route path="/updatewrite/:firebaseId" element={<UpdateWrite />} />
        </Routes>
      </Router>
    </div> */
}
