import { cn } from '@/utils/cn';
import React from 'react';

function Paragraph({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-foreground leading-paragraph mt-4 max-w-md text-base font-normal md:mt-6 md:text-lg',
        className,
      )}
    >
      {children}
    </p>
  );
}

export default Paragraph;
