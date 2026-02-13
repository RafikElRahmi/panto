import { cn } from '@/utils/cn';
import React from 'react';

function Caption({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3
      className={cn(
        'text-foreground lg:text-4xxl mt-3 text-3xl leading-tight font-bold md:text-4xl',
        className,
      )}
    >
      {children}
    </h3>
  );
}

export default Caption;
