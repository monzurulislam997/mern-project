
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const useDashboard = () => {
   return (
    <div>
    <h1 className='mb-5 text-2xl font-bold mt-2'>Company name</h1>
    <div className='border w-60  flex mb-5  rounded-lg ' >
        <AiOutlineSearch className='inline mt-2 text-slate-500 mr-1 mb-1' />
        <input type="text" placeholder="Type here" className="input outline-none  input-ghost w-full max-w-xs" />
    </div>

    <div className='text-white' >
        <h2 className='font-bold text-slate-400 mb-3'>CLIENT MASTER</h2>
        <Link to="/viewclient"> <button className="btn w-3/4 text-white bg-blue-700 py-1 mb-2 rounded-md"> View Clients </button></Link>
        <Link to="/addclient"> <button className="btn w-3/4  rounded-lg     py-1 hover:text-white bg-blue-700"> Add Clients </button></Link>


    </div>
</div>)

    
};

export default useDashboard;
