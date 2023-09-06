import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import EmployDetail from "./pages/EmployDetail";
import EmployWrite from "./pages/EmployWrite";
import EmployList from "./pages/EmployList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/employ-detail" element={<EmployDetail />} />
        <Route path="/employ-write" element={<EmployWrite />} />
        <Route path="/employ-list" element={<EmployList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
