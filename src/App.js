import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
