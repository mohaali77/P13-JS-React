import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from './pages/profile/profile'
import Login from './pages/login/login'

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile/:id" element={<Profile />} />
  </Routes>
} AAAAAAAAAA