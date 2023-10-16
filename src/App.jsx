import { GlobalStyles } from './contexts/globalStyles.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { AlertProvider } from './contexts/AlertContext.jsx';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';

function App() {
  return (
    <>
      <AlertProvider>
        <UserProvider>
          <GlobalStyles />
          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
        </UserProvider>
      </AlertProvider>
    </>
  );
}
export default App;
