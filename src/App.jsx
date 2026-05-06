import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import Studio from "./pages/studio";
import OneBedRoom from "./pages/onebedroom";
import TwoBedRoom from "./pages/twobedroom";
import PageTransition from "./components/pagetransition";
import AmenitiesPage from "./pages/amenities";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Book from "./pages/book";
import TermsOfUse from "./pages/termsofuse";
import PrivacyPolicy from "./pages/privacypolicy";
import RealEstate from "./pages/realestate";
import RatingWidget from "./components/ratingwidget";
import NotFound from "./pages/notfound";

const philgoodhomes = createBrowserRouter([

  {path: "/", element: <Home/>},
  {path: "/apartments/studio", element: <PageTransition><Studio/></PageTransition>},
  {path: "/apartments/onebedroom", element: <PageTransition><OneBedRoom/></PageTransition>},
  {path: "/apartments/twobedroom", element: <PageTransition><TwoBedRoom/></PageTransition>},

  {path: "/amenities", element: <PageTransition><AmenitiesPage/></PageTransition>},
  {path: "/gallery", element: <PageTransition><Gallery/></PageTransition>},
  {path: "/contact", element: <PageTransition><Contact/></PageTransition>},
  {path: "/book", element: <PageTransition><Book/></PageTransition>},
  {path: "/termsofuse", element: <PageTransition><TermsOfUse/></PageTransition>},
  {path: "/privacypolicy", element: <PageTransition><PrivacyPolicy/></PageTransition>},
  {path: "/realestate", element: <PageTransition><RealEstate/></PageTransition>},
  { path: "*", element: <PageTransition><NotFound /></PageTransition> },

])

function App() {
  return (
    <>
    <RouterProvider router={philgoodhomes}/>

    <RatingWidget/>
    
    </>
  )
}

export default App
