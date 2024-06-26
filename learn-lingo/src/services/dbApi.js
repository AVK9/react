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
    lastKey = Object.keys(data)[dataArray.length - 1];

    return dataArray;
  } else {
    toast.warn('No more data');
    return [];
  }
};

export const favoritesData = async (searchKey, searchValue) => {
  console.log('favoritesData function called');
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
    return data[0]?.favorites;
  } else {
    // alert('error');
    console.log('error - error');
    toast.error('error');
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
    toast.warn('No data available');
  }
  return filteredTeachers;
};
////////////////////////////////

export const filterRecords = async filters => {
  const db = getDatabase(app);
  const dbRef = ref(db, 'lingo/teachers');

  const data = await get(dbRef);
  const filteredTeachers = [];

  if (data.exists()) {
    data.forEach(i => {
      const teacher = i.val();
      let matches = true;

      for (const field in filters) {
        const searchValue = filters[field];
        const fieldValue = teacher[field];

        if (fieldValue) {
          if (
            typeof fieldValue === 'string' &&
            !fieldValue.includes(searchValue)
          ) {
            matches = false;
          } else if (
            Array.isArray(fieldValue) &&
            !fieldValue.includes(searchValue)
          ) {
            matches = false;
          } else if (
            typeof fieldValue === 'number' &&
            fieldValue !== parseFloat(searchValue)
          ) {
            matches = false;
          }
        } else {
          matches = false;
        }

        if (!matches) break;
      }

      if (matches) {
        filteredTeachers.push(teacher);
      }
    });
  } else {
    toast.warn('No data available');
  }

  return filteredTeachers;
};
