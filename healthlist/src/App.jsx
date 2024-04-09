
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
import OcdArt from './pages/OcdArt';
import Journal from  './components/Journal';
import Exercisemed from  './components/Exercisemed';
import MeditationResources from './components/MeditationResources';
import Contact from './components/Contact';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
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
      path: "/loginpage",
      element: <LoginPage/>
    },
    {
      path: "/signup",
      element: <SignUp/>
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

    {
      path: "/ocdart",
      element: <OcdArt/>
    },
    {
      path: "/journal",
      element: <Journal/>
    },
    {
      path: "/exercisemed",
      element: <Exercisemed/>
    },
    {
      path: "/meditationResources",
      element: <MeditationResources/>
    },
    {
      path: "/contact",
      element: <Contact/>
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
