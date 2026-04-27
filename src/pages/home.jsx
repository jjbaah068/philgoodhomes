import Navbar from "./../components/navbar";
import Hero from "./../components/hero";
import herobg from "../assets/videos/hero.mp4"; 
import Amenities from "./../components/amenities";  
import FeaturedApartments from "./../components/featuredapartments";
import Testimonials from "./../components/testimonials";
import Footer from "./../components/footer";



export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        videoSrc={herobg}
      />
         <Amenities />
       
      <FeaturedApartments />
   
      <Testimonials />
      <Footer />
    </main>
  );
}