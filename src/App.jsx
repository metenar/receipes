import React from "react"
import Home from "./pages/home/Home"
import Categories from "./pages/categories/Categories"
import AddRec from "./pages/addRec/AddRec"
import SingleRec from "./pages/singlerec/SingleRec"
import TarifDefteri from "./pages/tarifDefteri/TarifDefteri"
import SubCategories from "./pages/subCategories/SubCategories"
import Navbar from "./components/navbar/Navbar"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./app.scss"
function App() {
  const Layout=()=>{
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/categories",
          element: <Categories/>,
        },
        {
          path: "/categories/:category",
          element: <SubCategories/>,
        },
        {
          path: "/yemekler/:id",
          element: <SingleRec/>,
        },
        {
          path: "/addrecipe",
          element: <AddRec/>,
        },
        {
          path: "/tarifdefteri",
          element: <TarifDefteri/>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
