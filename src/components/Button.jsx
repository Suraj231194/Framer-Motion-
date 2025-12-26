import React from 'react';
import { cn } from '../utils';

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const variants = {
        primary: 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-105 transition-transform',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5',
        ghost: 'text-gray-600 hover:text-primary hover:bg-gray-50',
    };

    return (
        <button
            className={cn(
                'px-6 py-2.5 rounded-full font-medium transition-all duration-300',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
