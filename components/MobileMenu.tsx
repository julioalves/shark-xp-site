
import React from 'react';
import { NavLink } from '../types';
import Logo from './Logo';

interface MobileMenuProps {
    isOpen: boolean;
    navLinks: NavLink[];
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navLinks, onClose }) => {
    if (!isOpen) return null;

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        onClose();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        setTimeout(() => {
            if (targetElement) {
                const headerElement = document.querySelector('header');
                const headerHeight = headerElement ? headerElement.offsetHeight : 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    };

    return (
        <div className="fixed inset-0 z-50 bg-background-dark lg:hidden" role="dialog" aria-modal="true">
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-secondary-900 px-4 py-3">
                    <Logo />
                    <button onClick={onClose} className="text-white" aria-label="Close menu">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center flex-1 gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={(e) => handleNavClick(e, link.href)} 
                            className="text-2xl font-bold text-secondary-200 transition-colors hover:text-primary-400"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a 
                        href="#pricing" 
                        onClick={(e) => handleNavClick(e, 'https://ead.professorlucassilva.com.br/shopping?sku=20053')}
                        className="mt-4 flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary-600 px-6 h-12 text-base font-bold leading-normal tracking-[0.015em] text-white transition-transform hover:scale-105"
                    >
                        <span className="truncate">Garanta seu Ingresso</span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
