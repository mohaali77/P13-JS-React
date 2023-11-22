import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from './pages/profile/profile'
import SignIn from './pages/login/login'

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<SignIn />} />
    <Route path="/profile/:id" element={<User />} />
  </Routes>
}
