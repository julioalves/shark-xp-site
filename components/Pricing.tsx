
import React from 'react';
import { pricingPlans } from '../constants';
import { PricingPlan } from '../types';

const PricingCard: React.FC<PricingPlan> = ({ name, price, features, isPopular, buttonText }) => {
    const cardClasses = isPopular
        ? "relative flex flex-col rounded-xl border-2 border-primary-500 bg-secondary-950 p-8 shadow-2xl shadow-primary-900/50 transform md:scale-105"
        : "flex flex-col rounded-xl border border-secondary-800 bg-secondary-950 p-8 transition-transform hover:scale-105";

    const buttonClasses = isPopular
        ? "mt-8 w-full rounded-full bg-primary-600 py-3 font-bold text-white transition-transform hover:scale-110 animate-pulse"
        : "mt-8 w-full rounded-full bg-primary-900 py-3 font-bold text-primary-200 transition-colors hover:bg-primary-800";

    return (
        <div className={cardClasses}>
            {isPopular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-xs font-bold uppercase text-white popular-badge">Mais Popular</div>}
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <div className="mt-2 flex items-baseline gap-2">
                 <p className="text-4xl font-black text-white">{price}</p>
                 {price !== "Sob Consulta" && <span className="text-sm font-semibold text-secondary-400">/ 2º Lote</span>}
            </div>
            <ul className="mt-6 flex-grow space-y-3 text-secondary-300">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-sm text-primary-400">check_circle</span>{feature}
                    </li>
                ))}
            </ul>
            <button className={buttonClasses}>{buttonText || 'QUERO GARANTIR MEU LUGAR'}</button>
        </div>
    );
};


const Pricing: React.FC = () => {
    return (
        <section className="flex flex-col gap-8 px-4 py-16 sm:py-24" id="pricing">
            <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">Garanta Seu Lugar no Próximo Nível</h2>
                <p className="mx-auto mt-2 max-w-2xl text-base font-normal leading-normal text-secondary-300">Escolha o ingresso que mais se alinha ao seu objetivo. O 2º Lote está disponível por tempo limitado. Aja agora antes da virada de preço!</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Pricing;