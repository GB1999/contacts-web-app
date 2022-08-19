import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './features/contacts/contactsSlice';
import modalReducer from './features/modal/modalSlice';
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    modal: modalReducer,
  },
});