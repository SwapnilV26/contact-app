import React, { createContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    // const data = { name, email };  
    // console.log(data);
    return (
        <>
            <div className='flex flec-row py-2 border-b'>
                <div className='text-4xl pr-3 mt-1'><CgProfile /></div>
                <Link to={{ pathname: `/contact/${id}` }}  state={{contact: props.contact}} >
                    <div className='font-semibold text-gray-900 text-lg'>{name}</div>
                    <div className='text-gray-700'>{email}</div>
                </Link>
                <button className='ml-auto text-red-600 text-2xl' onClick={() => props.clickHandler(id)}><FaTrashAlt /></button>
            </div>
        </>
    );
}

export default ContactCard