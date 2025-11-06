
import React from 'react';
import { testimonials } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="flex flex-col gap-8 px-4 py-16 sm:py-24" id="testimonials">
            <h2 className="text-center text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">O Que Nossos Participantes Dizem</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col gap-4 rounded-xl border border-secondary-800 bg-secondary-950 p-8">
                        <p className="text-lg italic text-secondary-300">{testimonial.quote}</p>
                        <div className="mt-2 flex items-center gap-4">
                            <img className="size-12 rounded-full object-cover" alt={`Headshot of ${testimonial.author.name}.`} src={testimonial.author.imgSrc} loading="lazy" />
                            <div>
                                <p className="font-bold text-white">{testimonial.author.name}</p>
                                <p className="text-sm text-secondary-400">{testimonial.author.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;