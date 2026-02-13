import { Facebook, Instagram, Twitter } from 'lucide-react';

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  const getIcon = (link: string) => {
    switch (link.toLowerCase()) {
      case 'facebook':
        return <Facebook size={16} />;
      case 'twitter':
        return <Twitter size={16} />;
      case 'instagram':
        return <Instagram size={16} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h4 className="text-primary mb-4 text-lg font-normal">{title}</h4>
      <ul className="space-y-3 text-sm">
        {links.map(l => (
          <li key={l} className="flex items-center gap-2">
            {getIcon(l)}
            {l}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
