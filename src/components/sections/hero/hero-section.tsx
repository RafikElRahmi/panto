import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Search } from 'lucide-react';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="relative flex h-120 w-full items-start justify-center md:h-screen">
      <ThemeToggle />
      <Image
        src="/hero-background.webp"
        alt="Hero"
        width={1440}
        height={1084}
        priority
        className="object-fit absolute start-0 top-0 h-screen w-full"
      />
      <div className="relative z-10 mt-36 flex flex-col items-center justify-center gap-3 text-center text-white">
        <h1 className="w-full leading-[1.2] font-bold text-[80] sm:text-[48px] lg:w-250 lg:text-[64px]">
          Make Your Interior More Minimalistic & Modern
        </h1>

        <p className="leading-paragraph mt-6 w-130 text-[14px] sm:text-[16px]">
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>

        <div className="mt-8 flex w-full items-center overflow-hidden rounded-full border border-white bg-white/20 backdrop-blur-xs sm:w-100">
          <input
            placeholder="Search furniture"
            className="h-14 flex-1 px-5 py-3 text-sm font-normal text-white outline-none placeholder:text-white"
          />
          <button className="bg-primary me-2 flex h-10 w-10 items-center justify-center rounded-full">
            <Search size={18} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
