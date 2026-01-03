"use client";

import { ReactNode } from 'react';

interface MarqueeProps {
    children: ReactNode;
    speed?: number; // seconds for one complete cycle
    pauseOnHover?: boolean;
    direction?: 'left' | 'right';
    className?: string;
}

const Marquee = ({
    children,
    speed = 30,
    pauseOnHover = true,
    direction = 'left',
    className = '',
}: MarqueeProps) => {
    return (
        <div className={`overflow-hidden ${className}`}>
            <div
                className={`flex gap-6 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
                style={{
                    animation: `marquee ${speed}s linear infinite`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                }}
            >
                {/* Original content */}
                <div className="flex gap-6 shrink-0">
                    {children}
                </div>
                {/* Duplicated content for seamless loop */}
                <div className="flex gap-6 shrink-0" aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
