import React,{useRef} from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';
import{ BsSearch } from "react-icons/bs";

const ContactList = (props) => {
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
  })

  const getSearchTerm = () => {
    props.searchKeyWord(inputEl.current.value);
  }

  return (
    <div className='mt-4 mx-4 lg:mx-96'>
      <div className='mb-4 flex'>
        <h1 className='text-3xl font-medium'>Contact List</h1>
        <Link to="/add" className='ml-auto'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 mb-2 ">Add Contacts</button>
        </Link>
      </div>

      {/* search bar */}
      <div className='relative'>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <BsSearch />
        </div>
        <input 
          ref={inputEl}
          type="search" 
          id="default-search"
          value={props.term}
          // we can also use e.target.value
          onChange={getSearchTerm}
          className="block w-full p-3 pl-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Contacts" 
        />
      </div>

      <div className='shadow-lg px-4 mt-1'>
        { renderContactList.length > 0 ? renderContactList : "No Contacts Available" }
      </div>

    </div>
  )
}

export default ContactList;