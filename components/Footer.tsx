
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
                <div className="text-center text-sm text-secondary-400">© 2025 Shark Experience. Todos os direitos reservados.</div>
                <div className="flex items-center gap-4">
                    <a className="text-secondary-400 hover:text-white" href="https://www.instagram.com/professorlucassilva/" aria-label="Instagram">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.163c3.204,0 3.584,0.012 4.85,0.07 3.252,0.148 4.771,1.691 4.919,4.919 0.058,1.265 0.069,1.645 0.069,4.849 0,3.205 -0.012,3.584 -0.069,4.849 -0.149,3.225 -1.664,4.771 -4.919,4.919 -1.266,0.058 -1.644,0.07 -4.85,0.07 -3.204,0 -3.584,-0.012 -4.849,-0.07 -3.275,-0.148 -4.771,-1.699 -4.919,-4.92 -0.058,-1.265 -0.07,-1.644 -0.07,-4.849 0,-3.204 0.013,-3.583 0.07,-4.849 0.148,-3.227 1.664,-4.771 4.919,-4.919 1.266,-0.057 1.645,-0.069 4.849,-0.069zm0,-2.163c-3.259,0 -3.667,0.014 -4.947,0.072 -4.358,0.198 -6.78,2.618 -6.98,6.98 -0.059,1.281 -0.073,1.689 -0.073,4.948 0,3.259 0.014,3.668 0.072,4.948 0.196,4.358 2.618,6.78 6.98,6.98 1.281,0.058 1.689,0.072 4.948,0.072 3.259,0 3.668,-0.014 4.948,-0.072 4.354,-0.196 6.782,-2.618 6.979,-6.98 0.059,-1.28 0.073,-1.689 0.073,-4.948 0,-3.259 -0.014,-3.667 -0.072,-4.947 -0.196,-4.354 -2.617,-6.78 -6.979,-6.98 -1.281,-0.059 -1.69,-0.073 -4.949,-0.073zm0,5.838c-3.403,0 -6.162,2.759 -6.162,6.162 0,3.403 2.759,6.162 6.162,6.162 3.403,0 6.162,-2.759 6.162,-6.162 0,-3.403 -2.759,-6.162 -6.162,-6.162zm0,10.162c-2.209,0 -4,-1.79 -4,-4 0,-2.209 1.791,-4 4,-4 2.209,0 4,1.791 4,4 0,2.21 -1.791,4 -4,4zm6.406,-11.845c-0.796,0 -1.441,0.645 -1.441,1.44 0,0.796 0.645,1.441 1.441,1.441 0.795,0 1.44,-0.645 1.44,-1.441 0,-0.795 -0.645,-1.44 -1.44,-1.44z"></path></svg>
                    </a>
                    <a className="text-secondary-400 hover:text-white" href="https://www.linkedin.com/in/lucasdasilvaesilva/" aria-label="LinkedIn">
                        <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.9,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.1,3 19,3M18.5,18.5H16.5V13.2A1.26,1.26 0 0,0 15.24,12C14.31,12 13.5,12.81 13.5,13.74V18.5H11.5V9.5H13.5V11.23C13.5,11.23 14.43,9.5 16,9.5C17.66,9.5 18.5,10.68 18.5,12.5V18.5M8,18.5H6V9.5H8V18.5M7,8.5A1.5,1.5 0 1,1 8.5,7A1.5,1.5 0 0,1 7,8.5Z"></path></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
