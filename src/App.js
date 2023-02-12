//Cấu hình route cho các component
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomeTemplate from "./templates/HomeTemplate";
import AdminTemplate from "./templates/AdminTemplate";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomeTemplate />}>
                    <Route index element={<HomePage />}></Route>
                    <Route path="home" element={<HomePage />}></Route>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="*" element={<Navigate to="" /> } ></Route>
                </Route>
                <Route path="admin" element={<AdminTemplate />}>
                    <Route index element={<div>index</div>}></Route>
                    <Route path="users" element={<div>user component</div>}></Route>
                    <Route path="products" element={<div>product component</div>}></Route>
                    <Route path="*" element={<Navigate to="/admin" /> } ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
