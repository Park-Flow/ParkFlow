import { GlobalStyles } from './contexts/globalStyles.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { AlertProvider } from './contexts/AlertContext.jsx';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function App() {
  return (
    <>
      <AlertProvider>
        <UserProvider>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </UserProvider>
      </AlertProvider>
    </>
  );
}
export default App;
