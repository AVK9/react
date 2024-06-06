import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../services/firebase';
import { getDatabase, ref, set, push } from 'firebase/database';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleRegister = (email, password, name) => {
  const auth = getAuth();
  console.log('auth', auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);

      const db = getDatabase(app);
      const newDocRef = push(ref(db, 'users/'));
      set(newDocRef, {
        name,
        email,
        favorites: '',
      })
        .then(() => {
          toast.success('data saved successfully');
        })
        .catch(error => {
          toast.error('error: ', error.message);
        });
    })
    .catch(() => toast.error('Invalid data'));
};

export const handleLogin = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      // console.log(user);
    })
    .catch(error => toast.error('Invalid login or password'));
};

// const saveData = async () => {
//   const db = getDatabase(app);
//   const newDocRef = push(ref(db, 'users/'));
//   set(newDocRef, {
//     name: inputValue1,
//     email: inputValue2,
//     favorites: inputValue2,
//   })
//     .then(() => {
//       alert('data saved successfully');
//     })
//     .catch(error => {
//       alert('error: ', error.message);
//     });
// };
