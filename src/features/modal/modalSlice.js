import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalContact: {},
  modalType: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },

    setModalType: (state, {payload}) => {
      state.modalType = payload.type;
    },
    setModalContact:(state, {payload})=>{
      console.log(payload);
      console.log(`Modal Should now be showing ${payload}`);
      state.modalContact = payload;
    }
  },
});

export const { openModal, closeModal, setModalType, setModalContact} = modalSlice.actions;
export default modalSlice.reducer;
