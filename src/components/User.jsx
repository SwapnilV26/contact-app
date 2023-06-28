import React from 'react'
import user from '../assests/user.jpg';
import { Link } from 'react-router-dom';

const UserDetail = (props) => {
    console.log(props)
    // const {name, email} = props.location.state.contact;
    return (
        <div className='mt-4 mx-4 lg:mx-96'>
            <Link to="/">
                <button type="button" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 mr-2 mb-2'>
                    Back
                </button>
            </Link>
            <div className='flex justify-center'>
                <div>
                    <img src={user} alt="" width={400} />
                    <div className='mt-2'>
                        <div className='text-lg text-gray-800 font-medium'>
                            <span className='font-semibold text-gray-900'>Name: </span> Swapnil
                        </div>
                        <div className='text-lg text-gray-700'>
                            <span className='font-semibold text-gray-900'>Email: </span>swap20@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail