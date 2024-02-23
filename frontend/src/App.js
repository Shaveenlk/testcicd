import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import User from './components/getuser/User';
import Add from './components/adduser/Add';
import Edit from './components/updateduser/Edit';


function App() {
  
  const route =createBrowserRouter([
    {
      path: "/",
      element: <User/>,
    },
    {
      path: "/edit/:id",
      element: <Edit/>,
    },
    {
      path:"/add",
      element: <Add/>,
    }
  ])

 

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
