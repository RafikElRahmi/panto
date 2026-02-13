import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

function NavigationButtons({ onPrev, onNext, canGoPrev, canGoNext }: NavigationButtonsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        disabled={!canGoPrev}
        type="button"
        aria-label="Previous"
        className="bg-background absolute top-1/2 left-0 z-10 flex h-14 w-14 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition disabled:opacity-40"
      >
        <ChevronLeft className="text-foreground h-6 w-6" aria-hidden="true" />
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        type="button"
        aria-label="Next"
        className="bg-background absolute top-1/2 right-0 z-10 flex h-14 w-14 translate-x-6 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition disabled:opacity-40"
      >
        <ChevronRight className="text-foreground h-6 w-6" aria-hidden="true" />
      </button>
    </>
  );
}

export default NavigationButtons;
