import Link from 'next/link';

const links = [
  { href: '#furniture', label: 'Furniture' },
  { href: '#shop', label: 'Shop' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

function NavLinks() {
  return (
    <nav className="hidden items-center gap-10 text-sm md:flex" aria-label="Main navigation">
      {links.map(link => (
        <Link key={link.href} href={link.href} className="transition hover:opacity-80">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default NavLinks;
