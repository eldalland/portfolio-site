import React, {useState} from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Gallery from '../components/GallerySection'
import About from '../components/AboutSection';
import { homeObjOne } from '../components/AboutSection/Data';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)  
    };
    return ( 
        <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle} />
       <HeroSection />
       <About {...homeObjOne} />
       <Gallery />
       <Testimonials />
       <Footer />
       </>
    );
};

export default Home
