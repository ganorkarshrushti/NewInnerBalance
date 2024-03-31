
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home  from './components/Home';
import Faq from './components/Faq';
import Help from './components/Help';
import Quiz from  './components/Quiz';
import AnxietyQuiz from  './pages/AnxietyQuiz';
import DepressionQuiz from './pages/DepressionQuiz';
import AdhdQuiz from './pages/AdhdQuiz';
import OcdQuiz from './pages/OcdQuiz';
import SocialQuiz from './pages/SocialQuiz';
import PtsdQuiz from './pages/PtsdQuiz';
import Articles from './components/Articles';
import AnxietyArt from './pages/AnxietyArt';
import DepressionArt from './pages/DepressionArt';



import { createBrowserRouter, RouterProvider} from 'react-router-dom'

function App() {
   const router=createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
  
    {
      path: "/faq",
      element: <Faq/>
    },
    {
      path: "/help",
      element: <Help/>
    },
    {
      path: "/quiz",
      element: <Quiz/>
    },
    {
      path: "/anxietyquiz",
      element: <AnxietyQuiz/>
    },

    {
      path: "/depressionquiz",
      element: <DepressionQuiz/>
    },

    {
      path: "/adhdquiz",
      element: <AdhdQuiz/>
    },

    {
      path: "/ocdquiz",
      element: <OcdQuiz/>
    },

    {
      path: "/socialquiz",
      element: <SocialQuiz/>
    },
    
    {
      path: "/ptsdquiz",
      element: <PtsdQuiz/>
    },
    {
      path: "/articles",
      element: <Articles/>
    },
    {
      path: "/anxietyart",
      element: <AnxietyArt/>
    },
    {
      path: "/depressionart",
      element: <DepressionArt/>
    },

    

   ])
  
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      
    </>   
  )
}

export default App
