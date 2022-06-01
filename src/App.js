import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Authentication/Login";
import RequireAuth from "./components/Authentication/RequerUser";
import Addadmin from "./components/Dashboard/Addadmin";
import Addproducts from "./components/Dashboard/Addproducts";
import Dashboard from "./components/Dashboard/Dashboard";
import Myorder from "./components/Dashboard/Myorder";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            {<Route path="myorder" element={<Myorder />}></Route>}
            <Route path="addservice" element={<Addproducts />}></Route>
            <Route path="adadmin" element={<Addadmin />}></Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
