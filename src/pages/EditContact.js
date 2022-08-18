
import {Link, useParams} from 'react-router-dom';
const EditContact = () => {
    const {contact_id} = useParams();
    return (
      <section className='section'>
        <h2>Edit Contact: {contact_id}</h2>
      </section>
    );
  };
  export default EditContact;