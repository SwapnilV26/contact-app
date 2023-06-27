import { useEffect, useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

function App() {
  const [contacts, setContacts] = useState([]);
 
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  }


  return (
    <>
      <Header />
      <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts = {contacts} />
    </>
  );
}

export default App;
