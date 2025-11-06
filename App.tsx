
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Speakers from './components/Speakers';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import Countdown from './components/Countdown';
import ImageModal from './components/ImageModal';
import VideoModal from './components/VideoModal';
import { navLinks } from './constants';
import { GalleryImage } from './types';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [modalContent, setModalContent] = useState<GalleryImage | null>(null);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const openModal = useCallback((content: GalleryImage) => {
        setModalContent(content);
    }, []);
    
    const closeModal = useCallback(() => {
        setModalContent(null);
    }, []);

    const eventDate = "2025-11-29T09:00:00";

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header navLinks={navLinks} onMenuToggle={toggleMenu} />
            <MobileMenu navLinks={navLinks} isOpen={isMenuOpen} onClose={toggleMenu} />
            <main className="flex flex-col">
                <Hero />
                <div className="mx-auto flex w-full max-w-5xl flex-col px-4 sm:px-10">
                    <Countdown targetDate={eventDate} />
                    <About />
                    <Gallery onImageClick={openModal} />
                    <Speakers />
                    <Location />
                    <Pricing eventDate={eventDate} />
                    <Testimonials />
                    <FaqSection />
                </div>
            </main>
            <Footer />
            {modalContent && (
                modalContent.type === 'video' && modalContent.videoId ? (
                    <VideoModal videoId={modalContent.videoId} onClose={closeModal} />
                ) : (
                    <ImageModal image={modalContent} onClose={closeModal} />
                )
            )}
        </div>
    );
};

export default App;