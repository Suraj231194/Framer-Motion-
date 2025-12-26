import React from 'react';
import { cn } from '../utils';

const Section = ({ id, className, children, background = 'white' }) => {
    const bgColors = {
        white: 'bg-white',
        gray: 'bg-gray-50/50',
        dark: 'bg-gray-900',
    };

    return (
        <section
            id={id}
            className={cn(
                'py-20 md:py-24 relative overflow-hidden',
                bgColors[background] || 'bg-white',
                className
            )}
        >
            {children}
        </section>
    );
};

export default Section;
