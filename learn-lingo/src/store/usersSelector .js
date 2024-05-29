import { createSelector } from '@reduxjs/toolkit';

export const selectStateTeachers = state => state.user.teachers;
