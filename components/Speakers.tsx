
import React from 'react';
import { speakers } from '../constants';

const Speakers: React.FC = () => {
    return (
        <section className="flex flex-col gap-12 px-4 py-16 sm:py-24" id="speakers">
            <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">Conheça os Especialistas que Vão Guiar sua Jornada</h2>
                 <p className="mx-auto mt-2 max-w-2xl text-base font-normal leading-normal text-secondary-300">Aprenda com quem vive o campo de batalha do mercado financeiro e já trilhou o caminho do sucesso que você busca.</p>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
                {speakers.map((speaker, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 text-center">
                        <img className="size-40 rounded-full object-cover border-2 border-primary-800" alt={`Foto de ${speaker.name}.`} src={speaker.imgSrc} />
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
                            <p className="text-sm font-medium text-primary-400">{speaker.title}</p>
                            <p className="mt-2 text-sm text-secondary-300">{speaker.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Speakers;