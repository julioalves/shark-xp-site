
import React from 'react';
import { features } from '../constants';
import { Feature } from '../types';

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
    <div className="flex flex-1 flex-col gap-4 rounded-xl border border-secondary-800 bg-secondary-950 p-6 text-center transition-all duration-300 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-900/50 hover:-translate-y-1">
        <span className="material-symbols-outlined mx-auto text-primary-400" style={{ fontSize: '32px' }}>{icon}</span>
        <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold leading-tight text-white">{title}</h3>
            <p className="text-sm font-normal leading-normal text-secondary-300">{description}</p>
        </div>
    </div>
);

const About: React.FC = () => {
    return (
        <section className="flex flex-col gap-6 px-4 py-4 sm:py-12" id="what-is-it">
            <div className="flex flex-col gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">Sua Carreira, 10x Mais Rápida</h2>
                <p className="mx-auto max-w-3xl text-base font-normal leading-normal text-secondary-300">
                    O Shark Experience não é sobre palestras. É sobre entregar um arsenal de ferramentas, conexões e estratégias para você dominar o mercado.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default About;