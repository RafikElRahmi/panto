import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-5 py-5 text-white md:px-14 md:py-8 lg:px-24">
        <span className="text-[24px] font-semibold tracking-wide text-white">Panto</span>

        <nav className="flex items-center gap-10 text-[14px]">
          <Link href="#furniture" className="transition hover:opacity-80">
            Furniture
          </Link>
          <Link href="#shop" className="transition hover:opacity-80">
            Shop
          </Link>
          <Link href="#about" className="transition hover:opacity-80">
            About Us
          </Link>
          <Link href="#contact" className="transition hover:opacity-80">
            Contact
          </Link>
        </nav>

        <div className="relative">
          <ShoppingBag size={20} />
          <span className="bg-primary absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-[11px]">
            0
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
