import logo from "@/assets/logo.jpg";

const navItems = ["Home", "About", "Services", "Work", "Contact"];

const scrollTo = (id: string) => {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20">
      {/* Upper section: description + pages */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 py-16 md:py-24">
        {/* Left - about blurb */}
        <div>
          <h3 className="font-serif text-foreground text-2xl md:text-3xl font-light leading-snug uppercase mb-6">
            Studio N is an editorial<br />
            photographer, based<br />
            in Leicester, UK.
          </h3>
          <p className="body-text text-sm text-muted-foreground max-w-md">
            Studio N's style is editorial with a relaxed documentary feel. Specialising in portrait, wedding, product and model photography across the UK and destination shoots worldwide.
          </p>
        </div>

        {/* Right - pages */}
        <div>
          <h4 className="font-serif text-foreground text-lg uppercase tracking-[0.15em] mb-6">Pages</h4>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className="font-serif text-muted-foreground text-base hover:text-foreground transition-colors underline underline-offset-4 decoration-border"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo divider */}
      <div className="max-w-6xl mx-auto flex items-center gap-6 py-8">
        <div className="flex-1 h-[1px] bg-border" />
        <img src={logo} alt="Studio N" className="h-14 w-auto" />
        <div className="flex-1 h-[1px] bg-border" />
      </div>

      {/* Bottom nav links + back to top */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-12 gap-8">
        <div className="grid grid-cols-2 gap-x-20 gap-y-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="nav-link text-left text-xs"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-foreground text-2xl hover:text-primary transition-colors"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto border-t border-border py-6">
        <p className="font-serif text-sm text-muted-foreground">
          All content Copyright © {new Date().getFullYear()} Studio N Photography
        </p>
      </div>
    </footer>
  );
};

export default Footer;
