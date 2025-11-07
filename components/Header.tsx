
import React from 'react';
import { NavLink } from '../types';
import Logo from './Logo';
import { useActiveSection, scrollToSection } from '../hooks/useActiveSection';

interface HeaderProps {
    navLinks: NavLink[];
    onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ navLinks, onMenuToggle }) => {
    const activeSection = useActiveSection();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        scrollToSection(href);
    };

    return (
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-secondary-900 bg-background-dark/80 px-4 py-3 backdrop-blur-md sm:px-10 md:px-20 lg:px-40">
            <Logo />
            <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
                <nav className="flex items-center gap-9">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href} 
                            className={`text-sm font-medium leading-normal transition-colors cursor-pointer ${
                                activeSection === link.href.substring(1)
                                ? 'text-primary-400'
                                : 'text-secondary-200 hover:text-primary-400'
                            }`}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <a 
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary-600 px-4 h-10 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-transform hover:scale-105" 
                    href="https://ead.professorlucassilva.com.br/shopping?sku=20053"
                >
                    <span className="truncate">Quero Minha Vaga</span>
                </a>
            </div>
            <button className="lg:hidden text-white" onClick={onMenuToggle} aria-label="Open menu">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </header>
    );
};

export default Header;