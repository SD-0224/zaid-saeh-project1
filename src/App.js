import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import DetailOfCourse from './pages/DetailOfCourse';
import RootLayout from './layouts/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detailOfCourse/:topic" element={<DetailOfCourse />} />
      </Route>
    </>
  ));

  return (
      <RouterProvider router={router} />
  );
}

export default App;
