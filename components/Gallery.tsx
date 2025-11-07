
import React from 'react';
import { galleryImages } from '../constants';
import { GalleryImage } from '../types';

interface GalleryProps {
    onImageClick: (image: GalleryImage) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onImageClick }) => {
    return (
        <section className="flex flex-col gap-6 px-4 py-4 sm:py-12" id="gallery">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">Momentos Inesquecíveis</h2>
                <p className="mx-auto max-w-3xl text-base font-normal leading-normal text-secondary-300">
                    Sinta a energia e a atmosfera das edições passadas do Shark Experience. Veja por que este é um evento imperdível.
                </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-2">
                {galleryImages.map((image, index) => (
                    <div 
                        key={index} 
                        className={`overflow-hidden rounded-xl ${image.className} cursor-pointer group relative`}
                        onClick={() => onImageClick(image)}
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && onImageClick(image)}
                    >
                        <img 
                            alt={image.alt} 
                            src={image.src}
                            srcSet={`${image.src.replace('.jpg', '-sm.jpg')} 300w,
                                     ${image.src.replace('.jpg', '-md.jpg')} 600w,
                                     ${image.src} 900w`}
                            sizes="(max-width: 768px) 100vw,
                                   (max-width: 1200px) 50vw,
                                   33vw"
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                         {image.type === 'video' && (
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/50">
                                <span className="material-symbols-outlined text-white text-6xl drop-shadow-lg scale-100 transition-transform group-hover:scale-110">play_circle</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;