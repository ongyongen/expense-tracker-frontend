import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExpenseCreate from './pages/ExpenseCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpenseCreate />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
