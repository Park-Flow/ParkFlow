import { GlobalStyles } from "./contexts/globalStyles.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
  
}
export default App;
