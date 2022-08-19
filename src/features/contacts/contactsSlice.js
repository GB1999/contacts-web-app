import { createSlice } from "@reduxjs/toolkit";
import contacts from "../../data/contactData";

const initialState = {
  contactEntries: contacts,
  contactsToDelete: [],
  searchResults: [],
  amount: 5,
  isLoading: true,
  isSearching: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      console.log(`Creating contact ${payload.newContact.id}`);
      console.log(payload.newContact);
      state.contactEntries = [...state.contactEntries, payload.newContact];
    },

    editContact: (state, { payload }) => {
      console.log(`Editing contact ${payload.editedContact.id}`);
      state.contactEntries = state.contactEntries.map((contact) =>
        contact.id === payload.editedContact.id
          ? payload.editedContact
          : contact
      );
    },
    removeContacts: (state) => {
      state.contactEntries = state.contactEntries.filter(
        (contact) => !state.contactsToDelete.includes(contact.id)
      );
    },
    markForDeletion: (state, { payload }) => {
      state.contactsToDelete = [...state.contactsToDelete, payload.id];
    },
    setSearch: (state, payload) => {
      console.log(payload);
      state.isSearching = payload;
    },
    searchContacts: (state, { payload }) => {
      state.searchResults = state.contactEntries.filter(
        (contact) =>
          contact.firstName.startsWith(payload) ||
          contact.lastName.startsWith(payload)
      );

      state.searchResults = state.contactEntries.filter((contact) => {
        if (
          contact.firstName.toLowerCase().startsWith(payload.toLowerCase()) ||
          contact.lastName.toLowerCase().startsWith(payload.toLowerCase())
        )
          return true;

        return false;
      });

      state.searchResults = state.searchResults.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );
    },
  },
});

export const {
  addContact,
  removeContacts,
  editContact,
  setSearch,
  searchContacts,
} = contactsSlice.actions;

export default contactsSlice.reducer;
