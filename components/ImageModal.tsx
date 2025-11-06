
import React, { useEffect } from 'react';
import { GalleryImage } from '../types';

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

export default ImageModal;
