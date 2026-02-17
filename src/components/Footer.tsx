import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Studio N" className="h-10 w-auto" />
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center">
          © {new Date().getFullYear()} Studio N Photography. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/studio.__n?igsh=ODJ5Z2J3djRrbWgy"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-xs"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-jagadeesh-893374153"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-xs"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
