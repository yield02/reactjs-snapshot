import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route, Link, useNavigate} from 'react-router-dom'

import './App.css';
import  PhotoContext  from './context/PhotoContext';
import publicRouter from './router';
import { useEffect, useState } from 'react';

function App() {

  const [inputValue, setinputValue] = useState('');
  const [searchValue, setsearchValue] = useState('');


  //handle change inputValue
  useEffect(()=> {
    const timeOut = setTimeout(() => setsearchValue(inputValue), 500);
    return () => clearTimeout(timeOut);
  },[inputValue])


  //handle change searchValue
  
  const navigate = useNavigate();
  useEffect(()=> {
    navigate(`/${searchValue}`);
  }, [searchValue])


  return (
    <PhotoContext>
      <div className="App container">
        <h1 className='text-center text-heading m-5'>SnapShot</h1>
        <div className="input-group mb-3">
          <input type="text" onChange={(e)=>{setinputValue(e.target.value)}} className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
        <div className='m-4'>
          <Link to="/mountain" className='nav-btn btn btn-dark'>Mountain</Link>
          <Link to="/beach" className='nav-btn btn btn-dark'>Beaches</Link>
          <Link to="/bird" className='nav-btn btn btn-dark'>Birds</Link>
          <Link to="/food" className='nav-btn btn btn-dark'>Food</Link>
        </div>
        <Routes>
          {
            publicRouter.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.patch} element={<Page searchTerm={route.data}></Page>}/>
            })
          }
        </Routes>
      </div>
    </PhotoContext>
  );
}

export default App;
