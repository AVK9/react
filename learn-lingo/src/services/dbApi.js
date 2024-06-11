import { toast } from 'react-toastify';
import { app } from '../services/firebase';
import {
  getDatabase,
  ref,
  get,
  query,
  limitToFirst,
  startAfter,
  orderByKey,
  orderByChild,
  equalTo,
} from 'firebase/database';

let lastKey = '';

export const firstData = async () => {
  const db = getDatabase(app);
  const dbRef = query(ref(db, 'lingo/teachers'), limitToFirst(4));
  const arr = await get(dbRef);
  if (arr.exists()) {
    const data = Object.values(arr.val());
    const dataArray = [];
    arr.forEach(i => {
      dataArray.push(i.val());
      lastKey = i.key;
    });
    return data;
  } else {
    toast.error('error');
  }
};

export const nextData = async () => {
  let dbRef;
  const db = getDatabase(app);

  dbRef = query(
    ref(db, 'lingo/teachers'),
    orderByKey(),
    startAfter(lastKey),
    limitToFirst(4)
  );

  const arr = await get(dbRef);
  if (arr.exists()) {
    const data = arr.val();
    const dataArray = Object.values(data);
    console.log('nextData', dataArray);

    lastKey = Object.keys(data)[dataArray.length - 1];

    return dataArray;
  } else {
    toast.warn('No more data');
    // lastKey = '';
    return [];
  }
};

export const favoritesData = async (searchKey, searchValue) => {
  const db = getDatabase(app);
  const dbRef = query(ref(db, 'users'));

  const recordQuery = query(
    dbRef,
    orderByChild(searchKey),
    equalTo(searchValue)
  );
  const arr = await get(recordQuery);

  if (arr.exists()) {
    const data = Object.values(arr.val());
    console.log('qwqwwq', data[0].favorites);
    return data[0].favorites;
  } else {
    alert('error');
  }
};
