import React, { useState, useRef, useEffect } from 'react';
import { PLAYLIST } from '../constants';
import { Pause, Play, SkipForward } from 'lucide-react';
import { GlassCard } from './UI/GlassCard';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Ensure playlist safety
  const currentSong = PLAYLIST[currentSongIndex] || PLAYLIST[0];

  useEffect(() => {
    // Attempt autoplay on mount with a slight delay to ensure DOM readiness
    const timer = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.volume = 0.5; // Set nice background volume
          const playPromise = audioRef.current.play();
    
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                // Autoplay was prevented by browser policy
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
              });
          }
        }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => setIsPlaying(true))
                .catch(e => {
                    console.error("Play error:", e);
                    setIsPlaying(false);
                });
        }
      }
    }
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % PLAYLIST.length);
    // Determine play state based on user intention; 
    // if they click next, they usually want to hear the music.
    setIsPlaying(true); 
  };

  const handleEnded = () => {
    nextSong();
  };

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
      console.error("Audio playback error:", e);
      setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 transition-all duration-300">
      <GlassCard className="!rounded-full p-0 overflow-hidden shadow-2xl shadow-brand-secondary/30">
        {/* 
            Using 'key' forces React to re-mount the audio element when the song changes.
            This is crucial for preventing "no supported sources" errors when switching tracks dynamically.
            It also allows us to use the 'autoPlay' attribute cleanly for the next track.
        */}
        <audio 
            key={currentSong.src} 
            ref={audioRef} 
            src={currentSong.src} 
            onEnded={handleEnded}
            onError={handleError}
            autoPlay={isPlaying}
        />
        
        <div className="flex items-center gap-3 pr-4 pl-2 py-2">
          {/* Circular Play/Pause Button */}
          <button 
            onClick={togglePlay}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center 
              bg-gradient-to-br from-brand-secondary to-brand-primary 
              text-brand-dark shadow-inner transition-transform active:scale-90
              ${isPlaying ? 'animate-pulse' : ''}
            `}
          >
            {isPlaying ? <Pause size={18} fill="currentColor" className="opacity-80" /> : <Play size={18} fill="currentColor" className="ml-1 opacity-80" />}
          </button>

          {/* Track Info */}
          <div className="flex flex-col justify-center w-28 overflow-hidden">
            <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-bold text-brand-dark uppercase tracking-wider opacity-60">
                    {isPlaying ? 'Now Playing' : 'Paused'}
                </span>
                {isPlaying && (
                    <div className="flex gap-[2px] items-end h-3">
                        <div className="w-[2px] h-2 bg-brand-secondary animate-[bounce_1s_infinite]"></div>
                        <div className="w-[2px] h-3 bg-brand-secondary animate-[bounce_1.2s_infinite]"></div>
                        <div className="w-[2px] h-1 bg-brand-secondary animate-[bounce_0.8s_infinite]"></div>
                    </div>
                )}
            </div>
            {/* Song Title & Artist */}
            <div className="flex flex-col">
                 <span className="text-xs font-heading font-bold text-brand-dark truncate">
                    {currentSong.title}
                 </span>
                 <span className="text-[10px] font-sans text-brand-dark/70 truncate">
                    {currentSong.artist}
                 </span>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSong}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/40 hover:bg-white/60 text-brand-dark transition-colors"
          >
            <SkipForward size={14} fill="currentColor" className="opacity-70" />
          </button>
        </div>
      </GlassCard>
    </div>
  );
};