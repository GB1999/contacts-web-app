import { Link } from 'react-router-dom';
import contacts from '../data/contactData';

const Contacts = () => {
  return (
    <section className='section'>
      <div className='products'>
        {contacts.map((contact) => {
          return (
            <article key={contact.id}>
              <h5>{contact.firstName}</h5>
              <Link to={`/contacts/edit_contact/${contact.id}`}>edit contact</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Contacts;