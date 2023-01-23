import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import GiftList from './components/GiftList.js';
import { UserProvider } from './Context/UserProvider.js';
import { WishlistProvider } from './Context/WishlistProvider.js';
import './App.css';

function App() {
  const [ allGifts, setAllGifts ] = useState([]);

  useEffect(() => {
    fetch("/gifts")
      .then((response) => response.json())
      .then(setAllGifts);
  }, []);

  console.log(allGifts)


  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route exact path='/login' element={ <Login />}></Route>
          <Route exact path='/gifts'
                element={<GiftList
                allGifts={allGifts}
          />}>
          </Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
