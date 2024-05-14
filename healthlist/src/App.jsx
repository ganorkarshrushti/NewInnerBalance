
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
import MoreArticles from './pages/MoreArticles';
import AnxietyArt from './pages/AnxietyArt';
import DepressionArt from './pages/DepressionArt';
import OcdArt from './pages/OcdArt';
import Journal from  './components/Journal';
import Exercisemed from  './components/Exercisemed';
import MeditationResources from './components/MeditationResources';
import CalmingVideosSlider from './components/CalmingVideosSlider';
import Affirmations from './components/Affirmations';
import TherapistCard from './components/TherapistCard';
import UserApp from './components/UserApp';
import BookingForm  from './components/BookingForm';
import Price from './components/Price';
import Contact from './components/Contact';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import LogoSlider from './components/LogoSlider';
import Footer from './components/Footer';
// import Card from './components/Card';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Chatbot } from './components/Chatbot';

function App() {
   const router=createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Footer",
      element: <Footer/>
    },
    {
      path: "/logoslider",
      element: <LogoSlider/>
    },
    
    {
      path: "/price",
      element: <Price/>
    },
    {
      path: "/userapp",
      element: <UserApp/>
    },
    {
      path: "/bookingform",
      element: <BookingForm/>
    },
    {
      path: "/therapistcard",
      element: <TherapistCard/>
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
      path: "/calmingvideosslider",
      element: <CalmingVideosSlider/>
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
      path: "/morearticles",
      element: <MoreArticles/>
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
    {
      path: "/affirmations",
      element: <Affirmations/>
    },
    {
      path: "/chatbot",
      element: <Chatbot/>
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
