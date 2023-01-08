import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExpenseTablePage from './pages/ExpenseTablePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpenseTablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
