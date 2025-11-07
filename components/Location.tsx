import React from 'react';

const Location: React.FC = () => {
    return (
        <section className="flex flex-col gap-6 px-4 py-4 sm:py-12" id="location">
            <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">
                    Um Local à Altura do Evento
                </h2>
                <p className="mx-auto max-w-3xl text-base font-normal leading-normal text-secondary-300">
                    O Shark Experience acontecerá na Fundação Casper Libero, no coração da Avenida Paulista, o centro financeiro e cultural de São Paulo, garantindo uma experiência de imersão completa e fácil acesso.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col gap-4 text-left">
                    <h3 className="text-2xl font-bold text-white">Fundação Casper Libero</h3>
                    <p className="text-secondary-300">
                        Av. Paulista, 900 - Bela Vista, São Paulo - SP, 01310-000
                    </p>
                    <ul className="space-y-2 text-secondary-300">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary-400 mt-1">location_on</span>
                            <span>Localização icônica com fácil acesso por metrô, ônibus e carro.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary-400 mt-1">wifi</span>
                            <span>Infraestrutura moderna com tecnologia de ponta para palestras e networking.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary-400 mt-1">restaurant</span>
                            <span>Cercado pela vibrante cena cultural e gastronômica da Avenida Paulista.</span>
                        </li>
                    </ul>
                     <a 
                        href="https://www.google.com/maps/place/Funda%C3%A7%C3%A3o+C%C3%A1sper+L%C3%ADbero/@-23.564751,-46.6543169,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5995254118f7:0x8897589d4133d26!8m2!3d-23.564751!4d-46.651742!16s%2Fg%2F1tdy88t8?entry=ttu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2 self-start rounded-full bg-secondary-900 px-6 py-3 text-sm font-bold text-primary-200 transition-colors hover:bg-secondary-800"
                    >
                        <span className="material-symbols-outlined text-base">map</span>
                        Ver no Google Maps
                    </a>
                </div>
                <div className="overflow-hidden rounded-xl border border-secondary-800 h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.202575083049!2d-46.65431688849479!3d-23.564750978701974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5995254118f7%3A0x8897589d4133d26!2sFunda%C3%A7%C3%A3o%20C%C3%A1sper%20L%C3%ADbero!5e0!3m2!1spt-BR!2sbr!4v1718828943360!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa da localização da Fundação Casper Libero"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;