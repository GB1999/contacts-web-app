import { closeModal, openModal } from "../features/modal/modalSlice";
import { removeContacts } from "../features/contacts/contactsSlice";
import {  useDispatch } from "react-redux";

const Modal = () => {
    const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to delete these contacts?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(removeContacts());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
