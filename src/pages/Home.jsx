import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import DesignPhilosophy from '../components/DesignPhilosophy';
import Clients from '../components/Clients';
import PrestigiousProjects from '../components/PrestigiousProjects';
import GallerySection from '../components/GallerySection';
import Team from '../components/Team';
import AboutUs from '../components/AboutUs';
import VideoStats from '../components/VideoStats';
import PageTransition from '../components/PageTransition';

const Home = () => {
    return (
        <PageTransition>
            <div className="pt-0">
                <Hero />
                <AboutUs />
                <VideoStats />
                <Services />
                <DesignPhilosophy />
                <Clients />
                <PrestigiousProjects />
                <GallerySection />
                <Team />
            </div>
        </PageTransition>
    );
};

export default Home;
