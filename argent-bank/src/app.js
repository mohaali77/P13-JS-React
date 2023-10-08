import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import User from './pages/user/user'
import Signin from './pages/sign-in/sign-in'

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/user" element={<User />} />
  </Routes>
}
