import { cn } from '@/utils/cn';
import Link from 'next/link';
import ArrowIcon from './arrow-icon';

function ViewAll({ href, className }: { href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium transition-colors',
        className,
      )}
    >
      View All
      <ArrowIcon />
    </Link>
  );
}

export default ViewAll;
