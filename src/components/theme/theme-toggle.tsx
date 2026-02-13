'use client';

import { useTheme } from '@/context/theme-provider';
import { Check } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute start-2/12 top-10/12 z-50 flex flex-col items-center gap-2">
      <div className="flex h-10 items-center justify-center gap-2 rounded-full border border-white bg-white/20 px-3 backdrop-blur-xs">
        <button
          className="bg-primary-orange size-4 rounded-full"
          onClick={() => setTheme('orange')}
        >
          {theme === 'orange' && <Check size={16} className="text-white" />}
        </button>
        <button
          className="bg-primary-cyan size-4 rounded-full"
          onClick={() => setTheme('cyan')}
        >
          {theme === 'cyan' && <Check size={16} className="text-white" />}
        </button>
        <button
          className="bg-primary-gray size-4 rounded-full"
          onClick={() => setTheme('gray')}
        >
          {theme === 'gray' && <Check size={16} className="text-white" />}
        </button>
      </div>
      <div className="flex size-12 items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-xs">
        <div className="size-4 rounded-full bg-white"></div>
      </div>
    </div>
  );
}
