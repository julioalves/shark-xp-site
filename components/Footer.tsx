
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-solid border-secondary-900 bg-background-dark py-12">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 px-4 sm:px-10 md:flex-row">
                <div className="flex items-center gap-4 text-white">
                    <div className="size-5 text-primary-500">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold">Shark Experience</h2>
                </div>
                <div className="text-center text-sm text-secondary-400">© 2024 Shark Experience. Todos os direitos reservados.</div>
                <div className="flex items-center gap-4">
                    <a className="text-secondary-400 hover:text-white" href="#" aria-label="Twitter">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.1,9.78 4.2,10.59C3.47,10.57 2.78,10.36 2.17,10V10.03C2.17,12.17 3.6,13.96 5.62,14.39C5.26,14.49 4.88,14.55 4.48,14.55C4.2,14.55 3.92,14.53 3.65,14.48C4.2,16.22 5.79,17.47 7.7,17.5C6.26,18.64 4.4,19.23 2.4,19.23C2.05,19.23 1.71,19.21 1.37,19.16C3.32,20.45 5.7,21.23 8.29,21.23C16,21.23 20.33,14.46 20.33,8.79C20.33,8.61 20.33,8.43 20.32,8.25C21.16,7.63 21.88,6.87 22.46,6Z"></path></svg>
                    </a>
                    <a className="text-secondary-400 hover:text-white" href="#" aria-label="LinkedIn">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.1,3 19,3M18.5,18.5H16.5V13.2A1.26,1.26 0 0,0 15.24,12C14.31,12 13.5,12.81 13.5,13.74V18.5H11.5V9.5H13.5V11.23C13.5,11.23 14.43,9.5 16,9.5C17.66,9.5 18.5,10.68 18.5,12.5V18.5M8,18.5H6V9.5H8V18.5M7,8.5A1.5,1.5 0 1,1 8.5,7A1.5,1.5 0 0,1 7,8.5Z"></path></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
