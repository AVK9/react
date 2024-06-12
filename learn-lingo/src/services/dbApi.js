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

/////////////////////////////////////////////////////////////////
export const filterRecordLanguages = async (field, searchValue) => {
  const db = getDatabase(app);
  const dbRef = ref(db, 'lingo/teachers');

  const data = await get(dbRef);
  const filteredTeachers = [];

  if (data.exists()) {
    data.forEach(i => {
      const teacher = i.val();
      if (teacher[field]) {
        const fieldValue = teacher[field];
        if (
          typeof fieldValue === 'string' &&
          fieldValue.includes(searchValue)
        ) {
          filteredTeachers.push(teacher);
        } else if (
          Array.isArray(fieldValue) &&
          fieldValue.includes(searchValue)
        ) {
          filteredTeachers.push(teacher);
        } else if (
          typeof fieldValue === 'number' &&
          fieldValue === parseFloat(searchValue)
        ) {
          filteredTeachers.push(teacher);
        }
      }
    });
  } else {
    console.log('No data available');
  }
  console.log('filteredTeachers', filteredTeachers);
  return filteredTeachers;
};
////////////////////////////////
