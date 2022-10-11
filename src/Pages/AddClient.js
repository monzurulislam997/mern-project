import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

import useDashboard from './../hooks/useDashboard';

const AddClient = () => {
    const [selectedImage, setSelectedImage] = useState('');
    const navigate = useNavigate()

    const upload_api_key = `6475b5dc472c58a06f7475591a9d832d`;

    const imgUpload = (e) => {
        const imgFiles = e.target.files;

        for (let i = 0; i < imgFiles.length; i++) {
            let imageData = new FormData();
            imageData.set("key", upload_api_key);
            imageData.append("image", imgFiles[i]);
            axios
                .post("https://api.imgbb.com/1/upload", imageData)
                .then((res) => {
                    setSelectedImage(res.data.data.display_url);

                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }



    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {

        if (selectedImage) {
            const companyInfo = {
                companyName: data.companyName,
                companyEmail: data.companyEmail,
                image: selectedImage,

                state: data.state,
                website: data.website,
                gstNumber: data.gstNumber,
                management: data.management,
                mobileNumber: data.mobileNumber

            }

            const companyData = await axios.post('https://mern-project-server.vercel.app/addclient', companyInfo)


            if (companyData) {
                console.log(companyData)
                alert("data inserted");
                navigate("/viewclient")

            }

        };


    }

    return (
        <div>

            <div className='flex w-full'>
                <div className='w-1/4 px-2 shadow-xl' >
                    <section className='pl-2' >

                        <div>
                            {useDashboard()}
                        </div>
                    </section >
                </div>
                <div className='3/4 pl-5 mt-3'>
                    <h3 className='text-2xl font-bold'>Add Client</h3>
                    <h2>Create Client Profile</h2>
                    <p>Add some basic information related to the client</p>

                    {/* form */}
                    <form onSubmit={handleSubmit(onSubmit)}  >

                        <div className=' flex gap-4 '>

                            <label htmlFor="myImage">
                                {
                                    !selectedImage && <div className=' w-24 h-24 my-8 rounded-full border'>
                                        <AiOutlinePlus className=' w-8   h-8 m-7 ' />
                                    </div>
                                }
                                {selectedImage && (
                                    <div >

                                        <img alt="notfound" className='w-32 h-32 rounded-full' src={selectedImage} />

                                    </div>
                                )}


                                {/* ----------image upload------- */}
                                <input type="file"

                                    id="myImage" className='hidden'

                                    {...register("myImage")}

                                    onChange={(e) => {
                                        imgUpload(e)
                                    }}




                                />
                            </label>



                            <div className='mt-12'>
                                <h2 className='text-xl font-semibold'>Companay Logo</h2>
                                <p>Logo ratio should be 1:1  and should be 120px X 120px</p>
                            </div>
                        </div>



                        <div className='flex w-full my-3 '>
                            <div className='w-full px-2'>

                                <div className='border  py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            Company Name
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Company Name"  {...register("companyName", { required: true })} className=" outline-none input input-bordered  max-w-xs" name='companyName' required />
                                </div>

                                <div className='border    py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            Company Email
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Type here"
                                        {...register("companyEmail", { required: true })}

                                        className=" outline-none input input-bordered max-w-xs" name='companyEmail' required />
                                </div>


                                <div className='border  py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            Select State
                                        </span>
                                    </label>

                                    <select {...register("state")} className='ml-32 w-42 inline-block outline-none' >
                                        <option defaultValue ></option>
                                        <option value="Bangladesh" >Bangladesh</option>
                                        <option value="India">India</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Australia">Australia</option>

                                    </select>
                                </div>
                                <div className='border    py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            GST Number
                                        </span>
                                    </label>
                                    <input type="number" placeholder="Gst Number"
                                        {...register("gstNumber", { required: true })}
                                        className=" outline-none input input-bordered w-full max-w-xs" name='gstNumber' required />
                                </div>
                                <div className='border    py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            Mobile Number
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Mobile Number"
                                        {...register("mobileNumber", { required: true })}
                                        className=" outline-none input input-bordered w-full max-w-xs" name='mobileNumber' required />
                                </div>
                            </div>



                            <div className='w-full px-2'>
                                <div className='border  py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            WebSite
                                        </span>
                                    </label>
                                    <input type="text" placeholder="website"
                                        {...register("website", { required: true })}
                                        className=" outline-none input input-bordered w-full max-w-xs" name="website" required />
                                </div>
                                <div className='border  py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            City Name
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Type here"
                                        {...register("cityName", { required: true })}
                                        className=" outline-none input input-bordered  max-w-xs" required />
                                </div>
                                <div className='border  py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            ManageMent Company
                                        </span>
                                    </label>

                                    <select  {...register("management")} className=' ml-36 outline-none'>
                                        <option defaultValue>  </option>
                                        <option value="Infoys"  >Infoys</option>
                                        <option value="Wripo"  >Wripo</option>
                                        <option value="HCL"  >HCL</option>
                                        <option value="Loda"  >Loda</option>
                                        <option value="Kioda"  >Kioda</option>
                                        <option value="Mphasis"  >Mphasis</option>

                                    </select>
                                </div>
                                <div className='border  py-1   flex mb-5   rounded-2xl'>
                                    <label  >
                                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 mx-3 my-1  block text-sm font-medium text-slate-700">
                                            Fax Number
                                        </span>
                                    </label>
                                    <input type="text" placeholder="Type here"
                                        {...register("faxNumber", { required: true })}
                                        className=" outline-none input input-bordered  max-w-xs" name='faxNumber' required />
                                </div>


                            </div>
                        </div>

                        <input type="submit" className='btn border px-5 bg-blue-700 my-4 text-white py-1 w-48 text-center' value="Save and Continue" />


                    </form>
                </div>
            </div>


        </div>

    );
};

export default AddClient;

