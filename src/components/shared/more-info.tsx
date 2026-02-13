import { cn } from '@/utils/cn';
import Image from 'next/image';
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
      <Image
        src={'/icons/long-right-arrow.svg'}
        alt="Arrow"
        width={16}
        height={16}
        className="w-12 lg:w-14"
      />
    </Link>
  );
}

export default MoreInfo;
