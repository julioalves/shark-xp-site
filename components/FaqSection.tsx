
import React from 'react';
import { faqItems } from '../constants';
import { FaqItem } from '../types';


const FaqItemComponent: React.FC<FaqItem> = ({ question, answer, defaultOpen = false }) => (
    <details className="group rounded-xl bg-secondary-950 p-4" open={defaultOpen}>
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white">
            {question}
            <span className="transition group-open:rotate-180">
                <span className="material-symbols-outlined">expand_more</span>
            </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-secondary-300">{answer}</p>
    </details>
);


const FaqSection: React.FC = () => {
    return (
        <section className="flex flex-col gap-8 px-4 py-16 sm:py-24" id="faq">
            <h2 className="text-center text-3xl font-bold leading-tight tracking-[-0.015em] text-white sm:text-4xl">Ainda tem dúvidas?</h2>
            <div className="mx-auto w-full max-w-3xl space-y-4">
                {faqItems.map((item, index) => (
                    <FaqItemComponent key={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default FaqSection;
