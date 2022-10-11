import React from 'react';
import { FiUser } from "react-icons/fi";
import { AiTwotoneLock } from "react-icons/ai";
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
    const [userError, setUserError] = useState("")
    const [passError, setPassError] = useState("")
    const navigate = useNavigate()
    const loginFormSubmit = (e) => {
        e.preventDefault()
        const username = e.target.name.value;
        const password = e.target.password.value;
        // validataton
        if (username !== "admin") {
            setPassError("")
            return setUserError("Please , write 'admin' as usename for testing purposes ")
        }

        else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setUserError(" ")
            return setPassError("Password must be at least 8 characters, contain at least one letter and one number")

        }

        e.target.reset();




        navigate('/addclient')

    }
    return (
        <div className='flex   w-full '>
            <div className='w-5/12 px-10' >
                <form onSubmit={loginFormSubmit} >
                    <div className='text-center my-20'>
                        <h1 className='text-4xl font-semibold' >Welcome</h1>
                        <h3 className='text-slate-400 mb-8'>Enter your username and password</h3>
                    </div>
                    <div className='border rounded-lg mb-2 px-2  ' >
                        <FiUser className='inline text-slate-500 mr-2 mb-1' />
                        <input className=' outline-none w-3/4 py-2 mb-2 ' type="text" name="name" required placeholder='Username' />
                    </div>
                    <p className='text-red-600'>{userError}</p>

                    <div className='border px-2  rounded-lg ' >
                        <AiTwotoneLock className='inline  text-slate-500 mr-2 mb-1' />
                        <input className=' outline-none w-3/4  py-2 mb-2 rounded-lg' type="password" name="password" placeholder='Password' />  <br />
                    </div>
                    <p className='text-red-600'>{passError}</p>
                    <input className='btn bg-blue-700 rounded-sm text-white w-full mt-4 py-2' type="submit" value="Log In" />

                </form>
                <p className='mb-10'>Forgot Password?</p>

                <div className=' mx-10 mt-32  bottom-10'>
                    <Link className='text-xl' href="#">Terms of Use</Link>
                    <Link className='text-xl ml-3' href="#">Privacy Policy</Link>
                    <p>&#169; All right reserved</p>
                </div>

            </div>

            <div className='w-3/4 h-screen bg-blue-800 flex flex-col justify-center items-center py-10  '>
                <div class="box w-96 mt-20 rounded-2xl h-80 shape"> </div>
                <div className='mt-14 text-center mx-18 text-white'>
                    <h2 className='text-2xl'>360° Solution for Asset Management</h2>
                    <p className='mx-24'>Any feedback can be an example of 360-degree feedback, but workplaces will specify the types of comments they're seeking from employees</p>
                </div>
            </div>
        </div>

    );
};

export default Login;