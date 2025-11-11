
import React, { useState, useCallback, useEffect } from 'react';
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
import { scrollToSection } from './hooks/useActiveSection';

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

    // Detecta hash na URL e rola para a seção correspondente
    useEffect(() => {
        const handleHashScroll = () => {
            if (window.location.hash) {
                const sectionId = window.location.hash;
                console.log('Hash detectado:', sectionId);
                
                // Tenta múltiplas vezes com delays progressivos
                const attempts = [500, 1000, 1500, 2000];
                
                attempts.forEach((delay, index) => {
                    setTimeout(() => {
                        const targetId = sectionId.replace(/^[#/]+/, '');
                        const element = document.getElementById(targetId);
                        
                        if (element) {
                            console.log('Elemento encontrado na tentativa', index + 1);
                            scrollToSection(sectionId);
                        } else {
                            console.log('Tentativa', index + 1, '- elemento não encontrado ainda');
                        }
                    }, delay);
                });
            }
        };

        // Roda ao montar o componente
        handleHashScroll();

        // Também monitora mudanças de hash (quando usuário clica em links internos)
        window.addEventListener('hashchange', handleHashScroll);

        return () => {
            window.removeEventListener('hashchange', handleHashScroll);
        };
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header navLinks={navLinks} onMenuToggle={toggleMenu} />
            <MobileMenu navLinks={navLinks} isOpen={isMenuOpen} onClose={toggleMenu} />
            <main className="flex flex-col">
                <Hero />
                <div className="mx-auto flex w-full max-w-5xl flex-col px-4 sm:px-10">
                    <Countdown targetDate={eventDate} />
                    <div id="evento">
                        <About />
                    </div>
                    <div id="galeria">
                        <Gallery onImageClick={openModal} />
                    </div>
                    <div id="palestrantes">
                        <Speakers />
                    </div>
                    <div id="local">
                        <Location />
                    </div>
                    <div id="ingressos">
                        <Pricing eventDate={eventDate} />
                    </div >
                    <div id="depoimentos">
                        <Testimonials />
                    </div>
                    <div id="faq">
                        <FaqSection />
                    </div>
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