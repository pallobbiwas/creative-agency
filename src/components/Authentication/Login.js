import React from 'react';
import img from '../../images/logos/logo.png';

const Login = () => {
    return (
        <div className='container mx-auto'>
            <div className="w-6/12 bg-yellow-100 mx-auto p-6 mt-32 rounded-lg shadow-2xl">
                <div className=''>
                    <img className='w-44 mx-auto mb-2' src={img} alt="" /> 
                    <hr />
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary px-10 rounded-md mt-10'>Google log in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;