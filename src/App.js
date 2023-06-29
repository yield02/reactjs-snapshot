import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import  PhotoContext  from './context/PhotoContext';

import { Routes, Route, Link} from 'react-router-dom'
import publicRouter from './router'


function App() {
  return (
    <PhotoContext>
      <div className="App container">
        <h1 className='text-center text-heading m-5'>SnapShot</h1>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
        <div className='m-4'>
          <Link to="/mountain" className='nav-btn btn btn-dark'>mountain</Link>
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
