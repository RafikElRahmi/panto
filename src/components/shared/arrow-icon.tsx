import { cn } from '@/utils/cn';

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="24"
      viewBox="0 0 48 24"
      className={cn('w-12 lg:w-14', className)}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4.5 12.4002H42M42 12.4002C42 12.4002 37.5119 9.44867 36.6 7.00024M42 12.4002C42 12.4002 38.0324 15.1736 36.6 17.8002"
        stroke="currentColor"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default ArrowIcon;
