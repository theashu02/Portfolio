import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway, Fira_Code } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ThemeColorProvider } from "@/components/ThemeColorProvider";

const raleway = Raleway({ subsets: ["latin"] });
const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className={`${raleway.className} font-sans`}>
        <>
          <style jsx global>{`
            :root {
              --raleway: ${raleway.style.fontFamily};
              --fira-code: ${firaCode.style.fontFamily};
            }
          `}</style>
        </>
        <ThemeColorProvider>
          <Component {...pageProps} />
        </ThemeColorProvider>
      </div>
    </ThemeProvider>
  );
}
