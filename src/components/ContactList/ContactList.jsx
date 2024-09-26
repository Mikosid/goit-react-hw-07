import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact
            data={contact}
            onDelete={() => handleDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
}
