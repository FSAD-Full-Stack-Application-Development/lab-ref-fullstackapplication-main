import { useEffect, useState } from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Login from './components/Login';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    else {
      setIsLoggedIn(true)
    }

  }, [ navigate ]);

  const logout = () => {
    localStorage.clear()
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link>
      </nav>
    {
      isLoggedIn && <button onClick={logout}>Logout</button>
    }

    {
      isLoggedIn ? <p>User is logged in</p> : null
    }

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path ='*' element={<p>Page not found.</p>} />
      </Routes>
    </>
  );
}

export default App;
