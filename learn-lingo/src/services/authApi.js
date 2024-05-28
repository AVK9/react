import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const handleRegister = (email, password) => {
  const auth = getAuth();
  console.log('auth', auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
    })
    .catch(() => alert('Invalid data'));
};

export const handleLogin = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
    })
    .catch(() => alert('Invalid user'));
};
