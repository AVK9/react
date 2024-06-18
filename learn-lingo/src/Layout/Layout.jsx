import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { Container } from 'components/common/Section/Container';

export const Layout = () => {
  return (
    <div className="wrapper">
      <header>
        <Container>
          <Header />
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
