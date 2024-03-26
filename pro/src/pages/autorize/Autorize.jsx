import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Autorize() {
  const [isAuth, setIsAuth] = useState(false);

  const handleClick = () => {
    setIsAuth(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/login');
  }, [isAuth, navigate]);

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.parent}>
          <h1 className={styles.heading}>Autorize User</h1>
          <p className={styles.messageText}>
            The letter has been sent to your email
          </p>
          <p className={styles.messageText}>Need verify email address</p>
          <div className={styles.btnRegbox}>
            <button onClick={handleClick} className={styles.btnReg}>
              OK
            </button>
          </div>
          <div className={styles.linksBox}>
            <a className={styles.linksLogin} href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
