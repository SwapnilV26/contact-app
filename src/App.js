import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import UserDetail from "./components/User";

// const { v4: uuidv4 } = require('uuid');

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  
  //storing data in contacts from localStorage if it is there or we will set it empty array
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  // function to delete contact and this id we are fetching from the ContactList.js through props which also getting if from its child
  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if(searchTerm !== ""){
      const newContactList = contacts.filter((contact)=>{
        return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
      })

      setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }
  }

  // We should avoid this method because ye jab bhi call krega to ise empty array milega 1st time and ye use hi set kr dega contacts me is se localStorage se bhi data ud jayega 
  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   // console.log(retriveContacts, "this is from local");
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, [])

  // using useEffect to store contact on local storage so that we can fetch it even after refresh
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<ContactList 
              contacts = { searchTerm.length < 1 ? contacts : searchResult } 
              getContactId = {deleteContact} 
              term={searchTerm} 
              searchKeyWord = {searchHandler}
            />} 
          />
          <Route path="/add" element={<AddContact addContactHandler = {addContactHandler} />} />
          <Route path="/contact/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
      
      {/* <AddContact addContactHandler = {addContactHandler} />
      <ContactList contacts = {contacts} getContactId = {deleteContact} /> */}
    </>
  );
}

export default App;
