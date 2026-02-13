import { ShoppingBag } from 'lucide-react';
import NavLinks from './nav-links';

function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full" role="banner">
      <div className="flex items-center justify-between px-5 py-5 text-white md:px-14 md:py-8 lg:px-24">
        <a href="/" className="text-3xl font-bold tracking-wide text-white" aria-label="Panto — Go to homepage">
          Panto
        </a>

        <NavLinks />

        <button
          className="relative"
          aria-label="Shopping bag — 0 items"
          type="button"
        >
          <ShoppingBag size={20} aria-hidden="true" />
          <span className="bg-primary absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full text-sm font-bold text-white" aria-hidden="true">
            0
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
