import { cn } from '@/utils/cn';
import React from 'react';

function Caption({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <h3
      id={id}
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
