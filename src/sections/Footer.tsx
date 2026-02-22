import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-6 mb-20 md:mb-0">
      <Link href="https://github.com/theashu02/" target="_blank" className="flex flex-col items-center gap-2 hover:text-primary transition-colors text-muted-foreground font-fira-code text-sm">
        <span className="">Built by Ashu Chauhan.</span>
        <span className="">© 2024-2025</span>
      </Link>
    </footer>
  );
}

export default Footer;
