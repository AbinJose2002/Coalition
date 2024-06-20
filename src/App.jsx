import React from 'react';
import Navbar from './components/Navbar1';
import Home from './components/Home';
import Team from './components/Team';
import Diary from './components/Diary';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import Day3 from './components/Day3';
import Day4 from './components/Day4';
import Score from './components/Score';

export default function App() {
  const router1 = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <Team />
          <Diary />
          <Outlet />\
          <Score/>
        </>
      ),
      children: [
        { path: 'day1', element: <Day1 /> },
        { path: 'day2', element: <Day2 /> },
        { path: 'day3', element: <Day3 /> },
        { path: 'day4', element: <Day4 /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router1} />
    </div>
  );
}