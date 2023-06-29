import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Routes, Route} from 'react-router-dom'
import publicRouter from './router'


function App() {
  return (
    <div className="App container">
      <h1 className='text-center text-heading m-5'>SnapShot</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Search</button>
        </div>
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
  );
}

export default App;
