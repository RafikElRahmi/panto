import FooterColumn from './footer-column';

function Footer() {
  return (
    <footer className="bg-background-light-gray text-foreground px-5 py-12 md:px-12 md:py-16 lg:px-24 lg:py-24" role="contentinfo">
      <div className="grid gap-12 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <h2 className="text-3xl font-bold">Panto</h2>
          <p className="leading-paragraph mt-4 text-base font-normal">
            The advantage of hiring a workspace with us is that gives you comfortable service and
            all-around facilities.
          </p>
        </div>

        <FooterColumn title="Services" links={['Email Marketing', 'Campaigns', 'Branding']} />

        <FooterColumn title="Furniture" links={['Beds', 'Chair', 'All']} />

        <FooterColumn title="Follow Us" links={['Facebook', 'Twitter', 'Instagram']} />
      </div>
      <div className="mt-16 flex items-center justify-between">
        <p className="text-muted text-center text-sm">Copyright © 2026</p>
        <nav className="flex items-center gap-5" aria-label="Legal">
          <a href="/terms" className="text-sm hover:underline">Terms & Conditions</a>
          <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
