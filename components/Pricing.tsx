import React, { useState, useEffect } from 'react';
import { pricingPlans } from '../constants';
import { PricingPlan } from '../types';

interface PricingCardProps extends PricingPlan {
    eventDate: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, features, buttonText, eventDate }) => {
    const [spotsSold, setSpotsSold] = useState(15);

    useEffect(() => {
        const calculateSpotsSold = () => {
            const now = new Date();
            const event = new Date(eventDate);

            const selloutDate = new Date(event);
            selloutDate.setDate(event.getDate() - 1);

            const salesStartDate = new Date(event);
            salesStartDate.setDate(event.getDate() - 90);

            if (now >= selloutDate) {
                return 100;
            }

            if (now <= salesStartDate) {
                return 15; // Start with 15% sold
            }

            const totalDuration = selloutDate.getTime() - salesStartDate.getTime();
            const elapsedDuration = now.getTime() - salesStartDate.getTime();

            const initialSpotsSold = 15;
            const dynamicPercentage = (elapsedDuration / totalDuration) * (100 - initialSpotsSold);
            const totalSold = initialSpotsSold + dynamicPercentage;

            return Math.min(100, totalSold);
        };

        const updatePercentage = () => {
             setSpotsSold(calculateSpotsSold());
        }

        updatePercentage();
        const interval = setInterval(updatePercentage, 60000); // Update every minute

        return () => clearInterval(interval);

    }, [eventDate]);

    const isSoldOut = spotsSold >= 100;

    const cardClasses = "relative flex flex-col rounded-xl border-2 border-primary-500 bg-secondary-950 p-8 shadow-2xl shadow-primary-900/50";

    const buttonClasses = "mt-8 w-full rounded-full bg-primary-600 py-3 font-bold text-white transition-transform hover:scale-105";

    const disabledButtonClasses = "mt-8 w-full rounded-full bg-secondary-800 py-3 font-bold text-secondary-500 cursor-not-allowed";

    return (
        <div className={cardClasses}>
            <h3 className="text-xl font-bold text-white text-center">{name}</h3>
            <div className="mt-2 flex items-baseline justify-center gap-2">
                 <p className="text-4xl font-black text-white">{price}</p>
                 <span className="text-sm font-semibold text-secondary-400">/ Vaga</span>
            </div>

            <div className="my-6 text-center">
                <p className="animate-pulse font-semibold text-primary-400 mb-1">ÚLTIMAS VAGAS!</p>
                <p className="font-bold text-red-400 uppercase tracking-wider">Mais de {Math.floor(spotsSold)}% preenchido!</p>
                <div className="w-full bg-secondary-800 rounded-full h-2.5 mt-2 overflow-hidden" role="progressbar" aria-valuenow={spotsSold} aria-valuemin={0} aria-valuemax={100} aria-label="Vagas preenchidas">
                    <div
                        className="bg-gradient-to-r from-red-500 to-orange-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${spotsSold}%` }}
                    ></div>
                </div>
            </div>

            <ul className="flex-grow space-y-3 text-secondary-300">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-sm text-primary-400 mt-1">check_circle</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <button
                className={isSoldOut ? disabledButtonClasses : buttonClasses}
                disabled={isSoldOut}
                onClick={() => {
                    if (!isSoldOut) {
                        window.location.href = 'https://ead.professorlucassilva.com.br/shopping?sku=20053';
                    }
                }}
            >
                {isSoldOut ? 'ESGOTADO' : (buttonText || 'QUERO GARANTIR MEU LUGAR')}
            </button>

        </div>
    );
};

interface PricingProps {
    eventDate: string;
}

const Pricing: React.FC<PricingProps> = ({ eventDate }) => {
    return (
        <section className="flex flex-col gap-6 px-4 py-8 sm:py-12" id="pricing">
            <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">Garanta Seu Lugar no Próximo Nível</h2>
                <p className="mx-auto mt-2 max-w-2xl text-base font-normal leading-normal text-secondary-300">O último lote de ingressos está disponível por tempo limitado. Garanta sua vaga antes que esgote!</p>
                <p className="mx-auto mt-2 max-w-2xl text-base font-normal leading-normal text-secondary-300">Evento presencial para um grupo seleto de profissionais ambiciosos que querem um lugar entre os grandes.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:max-w-md mx-auto">
                {pricingPlans.map((plan, index) => (
                    <PricingCard key={index} {...plan} eventDate={eventDate} />
                ))}
            </div>
        </section>
    );
};

export default Pricing;