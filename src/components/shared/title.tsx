import { cn } from '@/utils/cn';
import React from 'react';

function Title({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        'text-primary text-base font-semibold tracking-[0.2em] uppercase md:text-lg',
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default Title;
