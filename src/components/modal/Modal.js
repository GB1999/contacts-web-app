import { openModal, closeModal } from "../../features/modal/modalSlice";
import { removeContact } from "../../features/contacts/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

import "./modal.css";

const Modal = () => {
  const { modalContact } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();
  const reload=()=>window.location.reload();
  return (
    <modal id="myModal" class="modal is-blurred">
      <div class="modal-content">
      <h4>Are you sure you want to delete ${modalContact.firstName + " " + modalContact.lastName} from contact list?</h4>
         <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(removeContact(modalContact.id));
              dispatch(closeModal());
              reload();
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