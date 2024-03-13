import React, { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import DetailOfCourse from './pages/DetailOfCourse';
import Footer from "./components/Footer";

function App() {
  const [favoriteAppear, setFavoriteAppear] = useState(false); 
  const [favoriteArray, setFavoriteArray] = useState([]); 

  useEffect(()=>{
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteArray(storedFavorites);
  }, []); 

  const favoriteAppearFunction = () => {
    setFavoriteAppear(prevState => !prevState); 
  }  

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Home favoriteAppearFunction={favoriteAppearFunction} favoriteAppear={favoriteAppear} favoriteArray={favoriteArray} />} />
      <Route path="/detailOfCourse/:topic" element={<DetailOfCourse favoriteAppearFunction={favoriteAppearFunction}  favoriteArray={favoriteArray} setFavoriteArray={setFavoriteArray}  favoriteAppear={favoriteAppear}  setFavoriteAppear ={setFavoriteAppear} />} />
    </>
  ));

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
