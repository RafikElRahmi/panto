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
        className="absolute top-1/2 left-0 z-10 flex h-14 w-14 -translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition"
      >
        <ChevronLeft className="text-foreground h-6 w-6" />
      </button>

      <button
        onClick={onNext}
        disabled={!canGoNext}
        className="absolute top-1/2 right-0 z-10 flex h-14 w-14 translate-x-6 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition"
      >
        <ChevronRight className="text-foreground h-6 w-6" />
      </button>
    </>
  );
}

export default NavigationButtons;
