import './App.css';
import Login from './Pages/Login';
import ViewClients from './Pages/ViewClients';
import { Route, Routes } from 'react-router-dom';
import AddClient from './Pages/AddClient';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<ViewClients></ViewClients>}></Route>
        <Route path='/viewclient' element={<ViewClients></ViewClients>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/addclient' element={<AddClient></AddClient>}></Route>



      </Routes>


    </div>
  );
}

export default App;
