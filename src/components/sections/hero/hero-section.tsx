import { Search } from 'lucide-react';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="relative flex w-full items-center justify-center h-screen">
      <Image
        src="/hero-background.webp"
        alt="Hero"
        width={1440}
        height={1084}
        priority
        className="object-fit absolute start-0 top-0 h-screen w-full"
      />
      <div className="relative z-10 flex h-[820px] flex-col items-center justify-center text-center text-white sm:h-[900px]">
        <h1 className="max-w-[900px] leading-[1.2] font-semibold text-[80] sm:text-[48px] lg:text-[64px]">
          Make Your Interior More Minimalistic & Modern
        </h1>

        <p className="mt-6 max-w-[600px] text-[14px] leading-relaxed opacity-90 sm:text-[16px]">
          Turn your room with panto into a lot more minimalist and modern with ease and speed
        </p>

        <div className="mt-8 flex w-full max-w-[360px] items-center overflow-hidden rounded-full border border-white backdrop-blur-xs sm:max-w-[420px]">
          <input
            placeholder="Search furniture"
            className="h-14 flex-1 px-5 py-3 text-sm font-semibold placeholder:text-white text-white outline-none"
          />
          <button className="me-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#E58411]">
            <Search size={18} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
