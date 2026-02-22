import Link from "next/link";
import React from "react";

function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link className="inline-block px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-300 font-fira-code text-sm" href={link}>
      {text}
    </Link>
  );
}

export default Button;
