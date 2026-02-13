import FooterColumn from './footer-column';

function Footer() {
  return (
    <footer className="bg-background-light-gray text-foreground px-5 py-12 md:px-12 md:py-16 lg:px-24 lg:py-24">
      <div className="grid gap-12 sm:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <h3 className="text-3xl font-bold">Panto</h3>
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
        <div className="text-muted text-center text-sm">Copyright © 2026</div>
        <div className="flex items-center gap-5">
          <span className="text-sm">Terms & Conditions</span>
          <span className="text-sm">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
