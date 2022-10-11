import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineSearch, } from "react-icons/ai";
import { Link } from 'react-router-dom';
import useDashboard from '../hooks/useDashboard';
import AddClient from './AddClient';
import ShowClient from './ShowClient';



const ViewClients = () => {

    const [allClient, setAllClient] = useState([])

    useEffect(() => {
        axios.get('https://mern-project-server.vercel.app/allclients')
            .then(data => setAllClient(data.data))
    }, [])



    return (
        <div className='px-3 w-full flex '>
            <section className=' w-1/4'>
                {/* <div>
                    <h1 className='mb-5 text-2xl font-bold mt-2'>Company name</h1>
                    <div className='border w-60  flex mb-5  rounded-lg ' >
                        <AiOutlineSearch className='inline mt-2 text-slate-500 mr-1 mb-1' />
                        <input type="text" placeholder="Type here" className="input outline-none  input-ghost w-full max-w-xs" />
                    </div>

                    <div className='text-white' >
                        <h2 className='font-bold text-slate-400 mb-3'>CLIENT MASTER</h2>
                        <button className="btn w-3/4 text-white bg-blue-700 py-1 mb-2 rounded-md">View Clients</button>
                        <button className="btn w-3/4  rounded-lg     py-1 hover:text-white bg-blue-700"><Link to="/addclient">Add Clients</Link></button>


                    </div>
                </div> */}
                <div>
                    <>{useDashboard()}</>
                </div>

            </section >
            <section className=" w-full ">
                <h2 className='text-2xl font-bold mb-2'>View Clients</h2>
                <div className='flex gap-10'>
                    <div className='border  w-1/4 flex mb-5 py-1  rounded-lg ' >
                        <input type="text" placeholder="Sort here" className="input px-2  outline-none  input-ghost w-full max-w-xs" />
                        <select className='mx-2'>
                            <option></option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                        </select>

                    </div>
                    <div className='border  w-1/4 flex mb-5 py-1  rounded-lg ' >
                        <input type="text" placeholder="
                    Facilitator" className="input px-2  outline-none  input-ghost w-full max-w-xs" />
                        <select className='mx-2'>
                            <option></option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                            <option>Option 5</option>
                        </select>

                    </div>
                    <button className='mb-4'>Reset</button>
                </div>
                <div className='border w-56 py-1   flex mb-5   rounded-2xl' >
                    <AiOutlineSearch className='inline mt-2  text-slate-500 mr-1 mb-1' />
                    <input type="text" placeholder="Type here" className="input outline-none  input-ghost w-full max-w-xs" />
                </div>

                <section>
                    <div className="overflow-x-auto w-full  ">
                        <table className="table  w-full">
                            <thead className='mr-16'>
                                <tr className='bg-slate-100'>

                                    <th >Company Name</th>

                                    <th>Email Address</th>
                                    <th>Phone Number</th>
                                    <th>Contact Person</th>
                                    <th>Facilator</th>

                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    allClient.map(client => <ShowClient
                                        key={client._id}
                                        client={client}

                                    >


                                    </ShowClient>)
                                }

                            </tbody>

                        </table>
                    </div>


                </section>


            </section>
        </div>
    );
};

export default ViewClients;