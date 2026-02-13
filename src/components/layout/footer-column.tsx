import { Facebook, Instagram, Twitter } from 'lucide-react';

const socialLinks: Record<string, string> = {
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
};

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  const getIcon = (link: string) => {
    switch (link.toLowerCase()) {
      case 'facebook':
        return <Facebook size={16} aria-hidden="true" />;
      case 'twitter':
        return <Twitter size={16} aria-hidden="true" />;
      case 'instagram':
        return <Instagram size={16} aria-hidden="true" />;
      default:
        return null;
    }
  };

  const isSocial = (link: string) => !!socialLinks[link.toLowerCase()];

  return (
    <nav aria-label={title}>
      <h3 className="text-primary mb-4 text-lg font-normal">{title}</h3>
      <ul className="space-y-3 text-sm">
        {links.map(l => (
          <li key={l}>
            {isSocial(l) ? (
              <a
                href={socialLinks[l.toLowerCase()]}
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${l}`}
              >
                {getIcon(l)}
                {l}
              </a>
            ) : (
              <a href="#" className="hover:underline">
                {l}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterColumn;
