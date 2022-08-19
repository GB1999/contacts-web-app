import { createSlice } from "@reduxjs/toolkit";
import contacts from "../../data/contactData";

const initialState = {
  contacts: contacts,
  contactsToDelete: [],
  amount: 5,
  isLoading: true,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts = [...state.contacts, payload.newContact];
    },

    editContact: (state, { payload }) => {
      console.log(`Editing contact ${payload.id}`)
      state.contacts = state.contacts.map((contact) =>
        contact.id === payload.id ? payload.editedContact : contact
      );
    },
    removeContacts: (state) => {
      state.contacts = state.contacts.filter(
        (contact) => !state.contactsToDelete.includes(contact.id)
      );
    },
    markForDeletion: (state, { payload }) => {
      state.contactsToDelete = [...state.contactsToDelete, payload.id];
    },
  },
});

console.log(contactsSlice);

export const { addContact, removeContacts, editContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;
