import { GlobalStyles } from './contexts/globalStyles.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Header from './components/Header';

function App() {
  const isDesktop = window.innerWidth > 820;

  return (
    <>
      <GlobalStyles />
      {isDesktop ? <Header /> : <></>}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
