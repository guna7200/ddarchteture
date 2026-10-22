import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import VideoStats from '../components/VideoStats';
import Services from '../components/Services';
import GallerySection from '../components/GallerySection';
import PageTransition from '../components/PageTransition';

const Home = () => {
    return (
        <PageTransition>
            <div className="pt-0 bg-[#F0EEE8]">
                {/* Banner Section with Apple-Style 60FPS Hardware Accelerated Video Sequence */}
                <Hero />

                {/* Section 01: About Us */}
                <AboutUs />

                {/* Section 02: Our Compass (Mission & Vision) */}
                <VideoStats />

                {/* Section 03: Expertise (Architecture, Interior, Landscape, PMC) */}
                <Services />

                {/* Section 04: Selected Work */}
                <GallerySection />
            </div>
        </PageTransition>
    );
};

export default Home;
