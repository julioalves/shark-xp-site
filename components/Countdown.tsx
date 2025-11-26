
import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = (): TimeLeft | null => {
        const difference = +new Date(targetDate) - +new Date();
        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return null;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return (
             <div className="text-center py-8 text-2xl font-bold text-primary-400">
                O grande dia chegou!
            </div>
        );
    }

    return (
        <div className="-mt-16 mb-2 relative z-20 countdown-enter">
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 text-center bg-secondary-950/80 border border-primary-800 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary-400">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-sm uppercase text-secondary-300">Dias</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary-400">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-sm uppercase text-secondary-300">Horas</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="text-sm uppercase text-secondary-300">Minutos</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="text-sm uppercase text-secondary-300">Segundos</span>
                </div>
            </div>
            <div className="text-center mt-4 text-secondary-300">
                <p className="text-lg">Credenciamento <span className="font-bold text-primary-400">8h</span> | Início do Evento <span className="font-bold text-primary-400">9h</span></p>
            </div>
        </div>
    );
};

export default Countdown;
