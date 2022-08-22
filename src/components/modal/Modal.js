import { openModal, closeModal } from "../../features/modal/modalSlice";
import { removeContact, setIsExpanded, setIsSearching } from "../../features/contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

import "./modal.css";

const Modal = () => {
  const { modalContact } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();
  return (
    <modal id="myModal" class="modal is-blurred">
      <div class="modal-content">
      <h4>Are you sure you want to delete <strong>{modalContact.firstName + " " + modalContact.lastName} </strong> from contact list?</h4>
         <div className="modal__btn-container">
          <button
            type="button"
            className="btn delete modal-btn"
            onClick={() => {
              dispatch(removeContact(modalContact.id));
              dispatch(setIsExpanded(false));
              dispatch(setIsSearching(false));
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn modal-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </modal>
    // <aside >
    //   <div className="modal">
    //     <h4>Are you sure you want to delete these contacts?</h4>
    //     <div className="btn-container">
    //       <button
    //         type="button"
    //         className="btn confirm-btn"
    //         onClick={() => {
    //           dispatch(removeContacts());
    //           dispatch(closeModal());
    //         }}
    //       >
    //         confirm
    //       </button>
    //       <button
    //         type="button"
    //         className="btn clear-btn"
    //         onClick={() => {
    //           dispatch(closeModal());
    //         }}
    //       >
    //         cancel
    //       </button>
    //     </div>
    //   </div>
    // </aside>
  );
};
export default Modal;
