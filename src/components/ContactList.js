import React from 'react'
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
  })

  return (
    <div className='mt-4 mx-4 lg:mx-96'>
      <div className='mb-4 flex'>
        <h1 className='text-2xl font-medium underline'>Contact List:</h1>
        <Link to="/add" className='ml-auto'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 mb-2 ">Add Contacts</button>
        </Link>
      </div>

      {renderContactList}
    </div>
  )
}

export default ContactList;