import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../services/firebase';
import { getDatabase, ref, set, push } from 'firebase/database';

export const handleRegister = (email, password) => {
  const auth = getAuth();
  console.log('auth', auth);
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);

      const db = getDatabase(app);
      const newDocRef = push(ref(db, 'users/'));
      set(newDocRef, {
        name: user.uid,
        email: email,
        favorites: '',
      })
        .then(() => {
          alert('data saved successfully');
        })
        .catch(error => {
          alert('error: ', error.message);
        });
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