import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { GlobalStyles } from "./style/global";
import Login from "./pages/Login";
import Main from "./pages/Main";
import EmployeeDetail from "./pages/employee/EmployeeDetail";
import EmployerDetail from "./pages/employer/EmployerDetail";
import EmployWrite from "./pages/employer/EmployWrite";
import EmployList from "./pages/employer/EmployList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/employee-detail" element={<EmployeeDetail />} />
          <Route path="/employer-detail" element={<EmployerDetail />} />
          <Route path="/employ-write" element={<EmployWrite />} />
          <Route path="/employ-list" element={<EmployList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
