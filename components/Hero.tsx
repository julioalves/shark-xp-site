
import React, { useState, useRef } from 'react';

const Hero: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(error => {
                    console.error("Video play failed:", error);
                    setIsPlaying(false);
                });
            } else {
                videoRef.current.pause();
            }
        }
    };

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    return (
        <section className="relative flex min-h-[calc(100vh-64px)] w-full items-center justify-center overflow-hidden py-20 text-center">
            <div className="video-container">
                <video
                    ref={videoRef}
                    loop
                    autoPlay
                    playsInline
                    muted={isMuted}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                >
                    <source src="/video-shark-xp-2024.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-overlay"></div>

            {!isPlaying && (
                <button
                    onClick={togglePlay}
                    className="absolute z-20 flex items-center justify-center size-24 bg-white/20 rounded-full backdrop-blur-sm transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    aria-label="Play video"
                >
                    <span className="material-symbols-outlined text-white text-7xl">play_arrow</span>
                </button>
            )}

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4">
                <div aria-hidden="true" className="absolute -top-32 left-1/2 -translate-x-1/2 w-[200%] max-w-[800px] aspect-square rounded-full bg-primary-700/20 blur-3xl"></div>
                <h1 className="text-4xl font-black leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Transforme-se em um <span className="text-primary-400">Tubarão do Mercado Financeiro</span>
                </h1>
                <p className="max-w-2xl text-base font-normal leading-normal text-secondary-200 sm:text-lg">
                    Imersão exclusiva com os gigantes do setor. Adquira em 1 dia o plano de ação, as estratégias e as conexões para multiplicar seus resultados.
                </p>
                <a className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary-600 px-6 h-12 text-base font-bold leading-normal tracking-[0.015em] text-white transition-transform hover:scale-105 animate-pulse" href="#ingressos">
                    <span className="truncate">QUERO ME TORNAR UM TUBARÃO</span>
                </a>
            </div>

        </section>
    );
};

export default Hero;