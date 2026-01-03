"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Auto-play after first user interaction (browser requirement)
    useEffect(() => {
        const handleFirstInteraction = () => {
            if (!hasInteracted) {
                setHasInteracted(true);
                // Don't auto-play, wait for user to click
            }
        };

        document.addEventListener("click", handleFirstInteraction, { once: true });
        document.addEventListener("keydown", handleFirstInteraction, { once: true });

        return () => {
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("keydown", handleFirstInteraction);
        };
    }, [hasInteracted]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.volume = 0.3; // 30% volume
                audioRef.current.play().catch(console.error);
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                src="/background-music.mp3"
                loop
                preload="auto"
            />

            {/* Floating music player - LEFT SIDE */}
            <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
                {/* Play/Pause button with circular wave */}
                <button
                    onClick={togglePlay}
                    className="relative w-12 h-12 rounded-full bg-background border border-border shadow-lg 
                   flex items-center justify-center
                   hover:bg-primary hover:border-primary hover:text-primary-foreground
                   transition-all duration-300 group"
                    aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
                >
                    {/* Pulse rings when playing */}
                    {isPlaying && (
                        <>
                            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                            <span className="absolute inset-[-4px] rounded-full border-2 border-primary/30 animate-pulse" />
                        </>
                    )}

                    {isPlaying ? (
                        <Volume2 className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors relative z-10" />
                    ) : (
                        <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors relative z-10" />
                    )}
                </button>

                {/* Sound wave bars */}
                <div
                    className={`flex items-center gap-[2px] h-6 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
                >
                    {[1, 2, 3, 4].map((bar) => (
                        <div
                            key={bar}
                            className="w-[3px] bg-primary rounded-full animate-wave"
                            style={{
                                animationDelay: `${bar * 0.15}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Sound wave animation styles */}
            <style jsx global>{`
                @keyframes wave {
                    0%, 100% {
                        height: 4px;
                    }
                    25% {
                        height: 16px;
                    }
                    50% {
                        height: 8px;
                    }
                    75% {
                        height: 20px;
                    }
                }
                
                .animate-wave {
                    animation: wave 1s ease-in-out infinite;
                }
            `}</style>
        </>
    );
};

export default MusicPlayer;
