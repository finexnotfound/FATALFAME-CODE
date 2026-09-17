import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell } from 'lucide-react';
import { LAUNCH_DATE_STRING } from '../data/modelData';

interface CountdownTimerProps {
  darkMode: boolean;
  onOpenWaitlist: () => void;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ darkMode, onOpenWaitlist }) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const target = new Date(LAUNCH_DATE_STRING).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div
      id="countdown-container"
      className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${
        darkMode
          ? 'bg-neutral-900/60 border border-neutral-800/80 shadow-2xl backdrop-blur-2xl'
          : 'bg-white/80 border border-neutral-200/90 shadow-xl backdrop-blur-2xl'
      }`}
    >
      {/* Background subtle radial glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="flex flex-col text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-rose-500">
              Official Worldwide Debut
            </span>
          </div>
          <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
            November 27th, 2026
          </h3>
          <p className={`text-xs sm:text-sm mt-1 max-w-md ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
            FatalFlame public weights, free API endpoints, and IDE extensions will be unleashed globally without paywalls.
          </p>
        </div>

        {/* Center/Right Countdown digits */}
        <div className="flex items-center gap-2 sm:gap-3">
          {timeUnits.map((unit) => (
            <div
              key={unit.label}
              className={`flex flex-col items-center justify-center w-16 sm:w-20 py-3 px-1 rounded-xl transition-all ${
                darkMode
                  ? 'bg-neutral-800/60 border border-neutral-700/50 shadow-inner'
                  : 'bg-neutral-100/90 border border-neutral-200 shadow-sm'
              }`}
            >
              <span className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
                darkMode ? 'text-white' : 'text-neutral-950'
              }`}>
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className={`text-[10px] sm:text-[11px] font-medium tracking-wider mt-1 ${
                darkMode ? 'text-neutral-400' : 'text-neutral-500'
              }`}>
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          id="countdown-notify-btn"
          type="button"
          onClick={onOpenWaitlist}
          className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-500 hover:to-orange-400 shadow-lg shadow-rose-500/20 active:scale-95 transition-all duration-200"
        >
          <Bell className="w-4 h-4" />
          <span>Get Launch Alert</span>
        </button>
      </div>
    </div>
  );
};
