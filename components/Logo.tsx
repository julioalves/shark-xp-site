
import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center gap-4 text-white">
        <div className="size-5 text-primary-500">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] text-white">Shark Experience</h2>
    </div>
);

export default Logo;
