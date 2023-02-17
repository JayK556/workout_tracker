import Tracker from "../components/Tracker";
import Account from "../components/Account";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="App">
        <Header />
            <div className="contents">
            <Outlet />
            </div>
        <Footer />
        </div>
      ),
      children: [
        {
          path: "home",
          element: <Home data={""} />
        },
        {
          path: "tracker",
          element: <Tracker />
        },
        {
          path: "home",
          element: <Account />
        },
      ]
    }
  ]);


  return (
    <RouterProvider
      router={router}
      fallbackElement={<Home />}
    />
  );
  
}



