import { cn } from '@/utils/cn';
import Link from 'next/link';
import ArrowIcon from './arrow-icon';

function MoreInfo({ href, className }: { href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'text-primary hover:text-primary/80 flex items-center gap-3 text-sm font-medium transition-colors lg:text-base',
        className,
      )}
    >
      More info
      <ArrowIcon />
    </Link>
  );
}

export default MoreInfo;
