import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import GiftList from './components/GiftList.js';
import Wishlist from './components/Wishlist.js';
import SavedGiftDetails from './components/SavedGiftDetails.js';
import Profile from './components/Profile';
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
      <WishlistProvider>
        <NavBar />
        <Routes>
          <Route path='/wishlists' element={<Home />}> </Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/gifts'
                element={<GiftList
                allGifts={allGifts}
          />}></Route>
          <Route exact path='/gifts/:id' element={<GiftList/>}></Route>
          <Route exact path='/saved_gifts/:id' element={<SavedGiftDetails/>}></Route>
          <Route exact path='/wishlists/:id' element={<Wishlist />}></Route>
          <Route exact path='/profile' element={<Profile />}></Route>
        </Routes>
        </WishlistProvider>
      </UserProvider>
    </div>
  );
}

export default App;
