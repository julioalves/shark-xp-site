
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Speakers from './components/Speakers';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';
import Countdown from './components/Countdown';
import { navLinks } from './constants';
import { GalleryImage } from './types';

// --- ImageModal Component ---
interface ImageModalProps {
    image: GalleryImage;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm modal-enter" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
        >
            <div 
                className="relative max-w-4xl max-h-[90vh]" 
                onClick={(e) => e.stopPropagation()}
            >
                <img src={image.src} alt={image.alt} className="block max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
                <h2 id="image-modal-title" className="sr-only">{image.alt}</h2>
                <button 
                    onClick={onClose} 
                    className="absolute -top-3 -right-3 flex items-center justify-center size-8 bg-white rounded-full text-black shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    aria-label="Close image viewer"
                >
                    <span className="material-symbols-outlined text-base">close</span>
                </button>
            </div>
        </div>
    );
};

// --- VideoModal Component ---
interface VideoModalProps {
    videoId: string;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm modal-enter" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
        >
            <div 
                className="relative w-full max-w-4xl aspect-video bg-black rounded-lg" 
                onClick={(e) => e.stopPropagation()}
            >
                 <h2 id="video-modal-title" className="sr-only">Player de vídeo do evento</h2>
                <iframe 
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <button 
                    onClick={onClose} 
                    className="absolute -top-3 -right-3 flex items-center justify-center size-8 bg-white rounded-full text-black shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    aria-label="Close video player"
                >
                    <span className="material-symbols-outlined text-base">close</span>
                </button>
            </div>
        </div>
    );
};


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
                    <Pricing />
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