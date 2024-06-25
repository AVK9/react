import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  reload,
} from 'firebase/auth';
import { app, auth } from '../services/firebase';
import {
  getDatabase,
  ref,
  set,
  push,
  orderByChild,
  equalTo,
  query,
  get,
  update,
} from 'firebase/database';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const handleRegister = (email, password, name) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      updateProfile(auth.currentUser, { displayName: name });
      sendEmailVerification(auth.currentUser).then(reload(user));

      const db = getDatabase(app);
      const newDocRef = push(ref(db, 'users/'));
      set(newDocRef, {
        name,
        email,
        favorites: [],
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
    .then(({ user }) => {})
    .catch(error => toast.error('Invalid login or password'));
};
//------------------
export function getUserData() {
  const user = auth.currentUser;
  if (user !== null) {
    const userData = {
      name: user.displayName,
      email: user.email,
      emailVerified: user.emailVerified,
      uid: user.uid,
    };
    return userData;
  }
}
//////////////////////////////////////////////////////////////////
export const googleRegister = (email, name) => {
  // const auth = getAuth();
  const db = getDatabase(app);
  const newDocRef = push(ref(db, 'users/'));
  set(newDocRef, {
    name,
    email,
    favorites: [],
  });
};
/////////////////////////////////////////////////////////////////
export const findAndUpdateRecord = async (searchKey, searchValue, newItem) => {
  const db = getDatabase(app);
  const dbRef = ref(db, 'users/');

  const recordQuery = query(
    dbRef,
    orderByChild(searchKey),
    equalTo(searchValue)
  );
  const snapshot = await get(recordQuery);

  if (snapshot.exists()) {
    const updates = {};
    snapshot.forEach(childSnapshot => {
      const key = childSnapshot.key;
      const existingData = childSnapshot.val();
      let favorites = existingData.favorites || [];

      const isItemExists = favorites.some(
        fav => fav.name === newItem.name && fav.surname === newItem.surname
      );

      if (!isItemExists) {
        favorites.push(newItem);
      }

      updates[`/users/${key}/favorites`] = favorites;
    });

    await update(ref(db), updates);
    // toast('favorites add');
  } else {
    toast.warn('favorites not faund');
  }
};
////////////////////////////////

export const findAndDeleteRecord = async (searchKey, searchValue, delItem) => {
  const db = getDatabase(app);
  const dbRef = ref(db, 'users/');

  const recordQuery = query(
    dbRef,
    orderByChild(searchKey),
    equalTo(searchValue)
  );
  const snapshot = await get(recordQuery);

  if (snapshot.exists()) {
    const updates = {};
    snapshot.forEach(childSnapshot => {
      const key = childSnapshot.key;
      const existingData = childSnapshot.val();

      const updatedFavorites = existingData.favorites.filter(
        item => item.name !== delItem.name && item.surname !== delItem.surname
      );
      updates[`/users/${key}/favorites`] = updatedFavorites;
    });

    await update(ref(db), updates);
    // toast('favorites delete');
  } else {
    toast.warn('favorites not faund');
  }
};
////////////////////////////////
