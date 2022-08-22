import { createSlice } from "@reduxjs/toolkit";
import contacts from "../../data/contactData";

const initialState = {
  contactEntries: contacts,
  contactsToDelete: [],
  searchResults: [],
  searchPrefix: "",
  amount: 5,
  isLoading: true,
  isSearching: false,
  isDeleting: false,
  isAscending: false,
  isExpanded: false,
  sortBy: "LAST_NAME",
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
    setDelete: (state, payload) => {
      console.log("NOW DELETING CONTACTS");
      state.isDeleting = payload;
    },
    markForDeletion: (state, { payload }) => {
      state.contactsToDelete = [...state.contactsToDelete, payload.id];
    },
    removeContacts: (state) => {
      state.contactEntries = state.contactEntries.filter(
        (contact) => !state.contactsToDelete.includes(contact.id)
      );
    },
    removeContact: (state, { payload }) => {
      // console.log(`removing contact ${payload}`);
      state.contactEntries = state.contactEntries.filter(function (contact) {
        if (contact.id == payload) {
          console.log(`found contact ${contact.firstName} for deletion`);
        }
        return contact.id != payload;
      });
      console.log(state.contactEntries);
    },
    setIsSearching: (state, {payload}) => {
      console.log(payload);
      state.isSearching = payload;
    },
    setAscending: (state, { payload }) => {
      state.isAscending = payload;
    },
    setIsExpanded:(state, {payload})=>{
      console.log(`Expanded: ${payload}`)
      state.isExpanded = payload;
    },
    setSortBy: (state, { payload }) => {
      state.sortBy = payload;
    },

    sortContacts: (state, action) => {
      switch (String(state.sortBy)) {
        case String("LAST_NAME"):
          state.contactEntries = state.contactEntries.sort((a, b) =>
            a.lastName.localeCompare(b.lastName)
          );
          break;
        case String("FIRST_NAME"):
          state.contactEntries = state.contactEntries.sort((a, b) =>
            a.firstName.localeCompare(b.firstName)
          );
          break;
        case String("EMAIL"):
          state.contactEntries = state.contactEntries.sort((a, b) =>
            a.email.localeCompare(b.email)
          );
          break;
        default:
          state.contactEntries = state.contactEntries.sort((a, b) =>
            a.lastName.localeCompare(b.lastName)
          );

          if (state.isAscending) {
            state.contactEntries = state.contactEntries.reverse();
          }
      }
    },
    setSearchPrefix: (state, { payload }) => {
      state.searchPrefix = payload;
    },
    sortSearchResults: (state, action) => {
      console.log(`Sorting by ${state.sortBy}`);
      state.searchResults = state.contactEntries.filter(
        (contact) =>
          contact.firstName.startsWith(state.searchPrefix) ||
          contact.lastName.startsWith(state.searchPrefix)
      );

      state.searchResults = state.contactEntries.filter((contact) => {
        if (
          contact.firstName.toLowerCase().startsWith(state.searchPrefix.toLowerCase()) ||
          contact.lastName.toLowerCase().startsWith(state.searchPrefix.toLowerCase())
        )
          return true;

        return false;
      });
      switch (state.sortBy) {
        case String("LAST_NAME"):
          state.searchResults = state.searchResults.sort((a, b) =>
            a.lastName.localeCompare(b.lastName)
          );
          break;
        case String("FIRST_NAME"):
          state.searchResults = state.searchResults.sort((a, b) =>
            a.firstName.localeCompare(b.firstName)
          );
          break;
        case String("EMAIL"):
          state.searchResults = state.searchResults.sort((a, b) =>
            a.email.localeCompare(b.email)
          );
          break;
        default:
          console.log("DEFAULT SORT");
          state.searchResults = state.searchResults.sort((a, b) =>
            a.lastName.localeCompare(b.lastName)
          );

          if (state.isAscending) {
            state.searchResults = state.searchResults.reverse();
          }
      }
    },
  },
});

export const {
  addContact,
  setDelete,
  removeContacts,
  removeContact,
  editContact,
  setIsSearching,
  setAscending,
  setSearchPrefix,
  setIsExpanded,
  setSortBy,
  sortContacts,
  sortSearchResults,
} = contactsSlice.actions;

export default contactsSlice.reducer;
