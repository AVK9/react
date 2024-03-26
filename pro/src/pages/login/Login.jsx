import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/useAuth';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import {
  AtSymbolIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { loginApi } from '../../services/authApi';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const { register, handleSubmit } = useForm();

  const { setToken } = useAuth();

  const onSubmit = formData => {
    loginApi(formData).then(data => {
      setToken(data.token);
      setIsAuth(true);
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
          <div className={styles.parent}>
            <h1 className={styles.heading}>Login User</h1>
            <div className={styles.inputBox}>
              <input
                {...register('email', { required: true })}
                className={styles.input}
                placeholder="john@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <AtSymbolIcon className={styles.inputIcn} />
            </div>
            <div className={styles.inputBox}>
              <input
                {...register('password', { required: true })}
                className={styles.input}
                placeholder="password"
                type={!showPassword ? 'password' : 'text'}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <KeyIcon className={styles.inputIcn} />
              <div
                className={styles.eyeShow}
                onClick={() => setShowPassword(!showPassword)}
              ></div>
              {!showPassword && <EyeIcon className={styles.inputIcnRight} />}
              {showPassword && (
                <EyeSlashIcon className={styles.inputIcnRight} />
              )}
            </div>
            <div className={styles.btnRegbox}>
              <button className={styles.btnLogin} type="submit">
                Login
              </button>
            </div>
            <div className={styles.linksBox}>
              <a className={styles.linksLogin} href="/register">
                Do you want to register?
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
