import "./app.scss";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import TopNavbar from "./components/navbar/TopNavbar";
import Login from './pages/login/Login';
import Register from "./pages/register/Register";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


function App() {

  const Layout = () => {
    return <div>
      <TopNavbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  }

  const router = createBrowserRouter([
    {
      path: "/", element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> }
      ]
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
