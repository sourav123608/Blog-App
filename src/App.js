import './App.css';
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';


function App() {
  const [isAuth,setAuth]=useState(localStorage.getItem("isAuth"));
  const signUserOut=()=>{
      signOut(auth).then(()=>{
        localStorage.clear();
        setAuth(false);
        window.location.pathname="/login";
      });
  };
  return (
    <Router>
      <nav>
        <Link to="/">HOME</Link>
        
        {!isAuth?(
        <Link to="/login">LOGIN</Link> ) : (
         <> <Link to="/createpost">CREATE POST</Link>
        <button onClick={signUserOut}> LOGOUT </button>
        </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
        <Route path='/login' element={<Login setAuth={setAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
