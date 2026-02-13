'use client';

import { useTheme } from '@/context/theme-provider';
import { Check } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="absolute start-2/12 top-10/12 z-50 flex flex-col items-center gap-2" role="group" aria-label="Theme color selector">
      <div className="flex h-10 items-center justify-center gap-2 rounded-full border border-white bg-white/20 px-3 backdrop-blur-xs">
        <button
          className="bg-primary-orange size-4 rounded-full"
          onClick={() => setTheme('orange')}
          aria-label="Orange theme"
          aria-pressed={theme === 'orange'}
          type="button"
        >
          {theme === 'orange' && <Check size={16} className="text-white" aria-hidden="true" />}
        </button>
        <button
          className="bg-primary-cyan size-4 rounded-full"
          onClick={() => setTheme('cyan')}
          aria-label="Cyan theme"
          aria-pressed={theme === 'cyan'}
          type="button"
        >
          {theme === 'cyan' && <Check size={16} className="text-white" aria-hidden="true" />}
        </button>
        <button
          className="bg-primary-gray size-4 rounded-full"
          onClick={() => setTheme('gray')}
          aria-label="Gray theme"
          aria-pressed={theme === 'gray'}
          type="button"
        >
          {theme === 'gray' && <Check size={16} className="text-white" aria-hidden="true" />}
        </button>
      </div>
      <div className="flex size-12 items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-xs" aria-hidden="true">
        <div className="size-4 rounded-full bg-white"></div>
      </div>
    </div>
  );
}
