import React from 'react'
import{FaTrashAlt} from "react-icons/fa";
import{CgProfile} from "react-icons/cg";

const ContactCard = (props) => {
    const {name, email} = props.contact;
    return (
        <div className='flex flec-row mb-2 border-b'>
            <div className='text-4xl pr-3 mt-1'><CgProfile /></div>
            <div>
                <div className='font-semibold text-gray-900 text-lg'>{name}</div>
                <div className='text-gray-600'>{email}</div>
            </div>
            <button className='ml-auto text-red-600 text-2xl'><FaTrashAlt /></button>
        </div>
    );
}

export default ContactCard