"use client";

import { ReactNode } from 'react';
import useInView from '@/hooks/useInView';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const ScrollReveal = ({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}: ScrollRevealProps) => {
    const { ref, isInView } = useInView({ threshold: 0.1 });

    const getTransform = () => {
        switch (direction) {
            case 'up': return 'translateY(40px)';
            case 'down': return 'translateY(-40px)';
            case 'left': return 'translateX(40px)';
            case 'right': return 'translateX(-40px)';
            case 'none': return 'none';
            default: return 'translateY(40px)';
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : getTransform(),
                transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
