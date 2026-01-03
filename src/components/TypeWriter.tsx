"use client";

import { useState, useEffect } from 'react';

interface TypeWriterProps {
    text: string;
    delay?: number;
    className?: string;
    startDelay?: number;
    showCursor?: boolean;
    cursorBlinkAfterComplete?: boolean;
}

const TypeWriter = ({
    text,
    delay = 100,
    className = '',
    startDelay = 0,
    showCursor = false,
    cursorBlinkAfterComplete = false
}: TypeWriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [hasStarted, setHasStarted] = useState(startDelay === 0);

    // Handle start delay
    useEffect(() => {
        if (startDelay > 0) {
            const startTimeout = setTimeout(() => {
                setHasStarted(true);
            }, startDelay);
            return () => clearTimeout(startTimeout);
        }
    }, [startDelay]);

    // Typing effect
    useEffect(() => {
        if (!hasStarted) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, delay);
            return () => clearTimeout(timeout);
        } else if (!isComplete) {
            setIsComplete(true);
        }
    }, [currentIndex, delay, text, isComplete, hasStarted]);

    const shouldShowCursor = showCursor && (
        (!isComplete) || (isComplete && cursorBlinkAfterComplete)
    );

    return (
        <span className={className}>
            {displayedText}
            {shouldShowCursor && (
                <span className="animate-blink ml-0.5 font-normal">|</span>
            )}
        </span>
    );
};

export default TypeWriter;
