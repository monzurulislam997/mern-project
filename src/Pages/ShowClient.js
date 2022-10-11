import React from 'react';

const ShowClient = ({ client }) => {
    const { companyName, companyEmail, image,mobileNumber, management } = client
    return (


        <tr >
            <td>
                <div className="flex  items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} className="rounded-full" alt="Avatar" />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{companyName}</div>
                        
                    </div>

                </div>
            </td>



            <td >

                <div className="font-semibold">{companyEmail} </div>
                

            </td>
            <td >

                <div className="font-semibold">{mobileNumber} </div>
                

            </td>
            <td >

                <div className="font-semibold">{management} </div>
                

            </td>
            <td >

                <div className="font-semibold">-- </div>
                

            </td>
            <td >

                <div className="font-semibold">--</div>
                

            </td>
                <td >

                    <div className="font-semibold">:</div>
                    

                </td>
           


        </tr>



    );
};

export default ShowClient;