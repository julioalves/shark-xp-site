
import React, { useEffect } from 'react';

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

export default VideoModal;
