import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import ExpenseTablePage from './pages/ExpenseTablePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpenseTablePage />} />
        <Route path="/user/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
