import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, email });
    if (name.length < 3) {
      alert("Name must contain atleast 3 characters");
    }
    else {
      props.addContactHandler({ name, email });
      alert("Your contact added successfully");
      setName("");
      setEmail("");
      navigate("/");
    }

  }

  return (
    <div className='mt-4 mx-4 lg:mx-96'>
      <Link to="/">
        <button type="button" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 mb-2'>
          Back
        </button>
      </Link>
      <h2 className='text-2xl font-medium underline mb-4'>Add Contact:</h2>
      <form className='' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-1 text-lg font-medium text-gray-900'>Name</label>
          <input
            type="text" name='name' required placeholder='Enter namer here'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-1 text-lg font-medium text-gray-900'>Email</label>
          <input
            type="email" name='email' required placeholder='Enter email here'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2'
          />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 mb-2 ">Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact