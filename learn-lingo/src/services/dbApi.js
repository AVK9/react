import { app } from '../services/firebase';
import {
  getDatabase,
  ref,
  get,
  query,
  limitToFirst,
  startAfter,
  orderByKey,
} from 'firebase/database';

export const firstData = async () => {
  const db = getDatabase(app);
  const dbRef = query(ref(db, 'lingo/teachers'), limitToFirst(4));
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const data = Object.values(snapshot.val());
    console.log('qwqwwq', data);
    return data;
  } else {
    alert('error');
  }
};

let lastKey = null;

export const nextData = async () => {
  let dbRef;
  const db = getDatabase(app);
  if (lastKey) {
    dbRef = query(
      ref(db, 'lingo/teachers'),
      orderByKey(),
      startAfter(lastKey),
      limitToFirst(4)
    );
  } else {
    dbRef = query(ref(db, 'lingo/teachers'), orderByKey(), limitToFirst(4));
  }

  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
    const data = snapshot.val();
    const dataArray = Object.values(data);
    console.log('nextData', dataArray);

    lastKey = Object.keys(data)[dataArray.length - 1];

    return dataArray;
  } else {
    alert('No more data');
    return [];
  }
};
