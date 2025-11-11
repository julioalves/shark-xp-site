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

            {/* Avisos Importantes */}
            <div className="rounded-lg border border-secondary-800 bg-secondary-950/40 p-4 md:p-6">
                <h3 className="text-xl font-bold text-white">
                    <svg className="w-6 h-6 inline-block mr-3 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    Avisos Importantes
                </h3>
                <ul className="mt-2 space-y-2 text-secondary-300">
                    <li>• Respeite a sinalização e atravesse apenas na faixa de pedestres.</li>
                    <li>• Atenção aos pertences e evite usar o celular enquanto caminha.</li>
                    <li>• Redobre os cuidados entre a faculdade, o hotel e nos arredores do evento.</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col gap-6 text-left">
                    {/* Como Chegar */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            <svg className="w-6 h-6 inline-block mr-3 text-primary-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                            </svg>
                            Como Chegar
                        </h3>
                        <p className="mt-2 text-secondary-300">
                            <strong>Endereço:</strong> Avenida Paulista, 900 – Bela Vista, São Paulo, SP {' '}
                            <a
                                href="https://maps.app.goo.gl/GbNYZjdcR8K1Ek8y9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-400 hover:underline"
                            >
                                (Ver no mapa)
                            </a>
                        </p>

                        <div className="mt-3 space-y-2 text-secondary-300">
                            <p><strong>Uber:</strong> Fundação Casper Líbero (use o nome como referência ao solicitar)</p>
                            <p><strong>Metrô:</strong> Estações próximas — Brigadeiro (Linha 2‑Verde), Consolação (Linha 4‑Amarela)</p>
                            <p><strong>Ônibus:</strong> Utilize apps de mobilidade para encontrar a melhor linha para a Avenida Paulista</p>
                            <p><strong>Carro / Estacionamento:</strong> Estacionamento disponível na Rua São Carlos do Pinhal, 303 (Valor aproximado: R$ 45,00)</p>
                        </div>
                    </div>

                    {/* Alimentação Próxima */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            <svg className="w-6 h-6 inline-block mr-3 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="8" />
                                <path d="M10 8v8" />
                                <path d="M14 8v8" />
                            </svg>
                            Alimentação Próxima
                        </h3>
                        <ul className="mt-2 space-y-2 text-secondary-300">
                            <li>
                                <strong>Top Center Shopping</strong> – Av. Paulista, 854 {' '}
                                <a href="https://maps.app.goo.gl/q66GKMoGN193rsfn7" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">(Mapa)</a>
                            </li>
                            <li>
                                <strong>McDonald’s</strong> – Av. Paulista, 810 {' '}
                                <a href="https://maps.app.goo.gl/ZLd1PtfkBMtCp3w78" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">(Mapa)</a>
                            </li>
                            <li>
                                <strong>Vita Natural (Vegano)</strong> – Alameda Campinas, 244 {' '}
                                <a href="https://maps.app.goo.gl/jiLNEnuVPq47dshH7" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">(Mapa)</a>
                            </li>
                        </ul>
                    </div>

                    {/* Observações de Segurança */}
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            <svg className="w-6 h-6 inline-block mr-3 text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 2l7 4v6c0 5-3.8 9.7-7 10-3.2-.3-7-5-7-10V6l7-4z" />
                            </svg>
                            Observações de Segurança
                        </h3>
                        <ul className="mt-2 space-y-2 text-secondary-300">
                            <li>• Circule com atenção na Avenida Paulista — prefira as calçadas e faixas de pedestres.</li>
                            <li>• Evite ostentar objetos de valor em locais movimentados.</li>
                            <li>• Caso precise de ajuda, procure seguranças do local ou estabelecimentos próximos.</li>
                        </ul>
                    </div>

                    {/* Mensagem de Boas-vindas removida */}
                </div>

                {/* Mapa e informações específicas do local (mantive mapa embutido) */}
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