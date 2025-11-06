import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative flex min-h-[calc(100vh-64px)] w-full items-center justify-center overflow-hidden py-20 text-center">
            <div className="video-container">
                <video autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2670&auto=format&fit=crop">
                    <source src="https://cdn.pixabay.com/video/2024/02/27/201202-919531190_large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-overlay"></div>
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-4">
                <div aria-hidden="true" className="absolute -top-32 left-1/2 -translate-x-1/2 w-[200%] max-w-[800px] aspect-square rounded-full bg-primary-700/20 blur-3xl"></div>
                <h1 className="text-4xl font-black leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    O Encontro de <span className="text-primary-400">TUBARÕES</span> do Mercado Financeiro
                </h1>
                <p className="max-w-2xl text-base font-normal leading-normal text-secondary-200 sm:text-lg">
                    Acelere sua carreira e domine as estratégias dos maiores especialistas do país em 3 dias de imersão total para se tornar um profissional de alta performance.
                </p>
                <a className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary-600 px-6 h-12 text-base font-bold leading-normal tracking-[0.015em] text-white transition-transform hover:scale-105 animate-pulse" href="#pricing">
                    <span className="truncate">QUERO GARANTIR MEU LUGAR</span>
                </a>
            </div>
        </section>
    );
};

export default Hero;