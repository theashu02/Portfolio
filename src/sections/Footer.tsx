import Link from "next/link";

function Footer() {

  return (
    <footer>
      <Link
        href="https://github.com/theashu02/"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Built by Ashu Chauhan.</span>
        <span className="footer-info">© 2024-2025</span>
      </Link>
    </footer>
  );
}

export default Footer;