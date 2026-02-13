import { cn } from '@/utils/cn';
import Link from 'next/link';

function MoreInfo({ href, className }: { href: string; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'text-primary font-montserrat hover:text-primary/80 flex items-center gap-3 text-sm font-medium transition-colors lg:text-base',
        className,
      )}
    >
      More info
      <svg
        width="48"
        height="24"
        viewBox="0 0 48 24"
        className="w-12 lg:w-14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 12.4002H42M42 12.4002C42 12.4002 37.5119 9.44867 36.6 7.00024M42 12.4002C42 12.4002 38.0324 15.1736 36.6 17.8002"
          stroke="currentColor"
          strokeLinecap="square"
        />
      </svg>
    </Link>
  );
}

export default MoreInfo;
