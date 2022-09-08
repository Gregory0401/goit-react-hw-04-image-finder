import s from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({contacts, onRemove}) => {
    return (
    <div className={s.contacts}>
       
    <ul className={s.list}>
        {contacts.length === 0 ? null : (
            <>
        {contacts.map(contact =>{
            return (
            <li key={contact.id} className={s.contact}>
                <p className={s.name}>☏ {contact.name} : {contact.number}</p>
                <button className={s.button}
                    onClick={() => {
                      onRemove(contact.id);
                    }}
                  >
                    ❌
                  </button>
            </li>
            );
                })}
                </>
        )}
    </ul>
    </div>
  )}     

  ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
  };

          export default ContactList

          
          
        
        