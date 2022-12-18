import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/blogs/Blogs';
import Statics from './components/statics/Statics';
import Tropics from './components/tropics/Tropics';
import Error from './components/errro/Error'
import Main from './layouts/main/Main';
import Quizes from './components/quizes/Quizes';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          loader:async()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Tropics></Tropics>
        },
        {
          path:"/statics",
          loader:async()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element:<Statics></Statics>
        },
        {
          path:"/blogs",
          element:<Blogs></Blogs>
        },
        {
          path:"/quiz/:tropicId",
          loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.tropicId}`),
          element:<Quizes></Quizes>
        },
        {
          path:"*",
          element:<Error></Error>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
