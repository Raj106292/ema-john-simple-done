import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import Orders from './Components/Orders/Orders';
import Shop from './Components/Shop/Shop';
import Signup from './Components/Signup/Signup';
import Main from './Layout/Main';
import { ProductCardLoader } from './Loaders/ProductCardLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ProductCardLoader,
          element: <Shop></Shop>,
        },
        {
          path: '/shop',
          loader: ProductCardLoader,
          element: <Shop></Shop>,
        },
        {
          path: '/orders',
          loader: ProductCardLoader,
          element: <Orders></Orders>,
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>,
        },
        {
          path: '/about',
          element: <About></About>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/signup',
          element: <Signup></Signup>,
        },
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
