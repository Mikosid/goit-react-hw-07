import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilter, selectContacts } from "../../redux/selectors";

import css from "./ContactList.module.css";
import { Heading } from "../Heading/Heading";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <>
      {!contacts.length ? (
        <Heading>We did not find any contact😯</Heading>
      ) : (
        <ul className={css.list}>
          {visibleContacts.map(
            (contact, index) => (
              console.log(contact),
              (
                <li className={css.item} key={contact.id}>
                  <Contact counter={index + 1} {...contact} />
                </li>
              )
            )
          )}
        </ul>
      )}
    </>
  );
};
