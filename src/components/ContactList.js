import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {
  console.log(props);
  
  const renderContactList = props.contacts.map((contact)=>{
    return <ContactCard contact= {contact} />
  })

  return (
    <div className='mt-4 mx-4 lg:mx-96'>
      <h1 className='text-2xl font-medium underline mb-4'>Contact List:</h1>
      {renderContactList}
    </div>
  )
}

export default ContactList;