import React, {useContext} from 'react'
import user from '../assests/user.jpg';
import { Link, useLocation } from 'react-router-dom';

const UserDetail = () => {
    const { state } = useLocation(); // Extract the state from location
    const { name, email } = state.contact; // Access the name and email from state
    // console.log(state);
    
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
                            <span className='font-semibold text-gray-900'>Name: </span>
                            {name}
                        </div>
                        <div className='text-lg text-gray-700'>
                            <span className='font-semibold text-gray-900'>Email: </span>
                            {email}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail