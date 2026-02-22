import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiGitPullRequest, FiGithub } from "react-icons/fi";

function OpenSourceContributions() {
  const contributions = [
    {
      repo: "facebook/react",
      prTitle: "Fix hydration mismatch error in certain edge cases",
      prUrl: "#",
      status: "Merged",
      description: "Identified and patched a critical hydration error impacting server-rendered applications, improving framework stability.",
    },
    {
      repo: "vercel/next.js",
      prTitle: "Improve image component caching",
      prUrl: "#",
      status: "Open",
      description: "Proposed an enhancement to the Next.js Image component to lower LCP locally during development.",
    },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto py-24 px-10 md:px-0 min-h-screen flex flex-col justify-center"
      id="open-source"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="flex items-center gap-4 mb-10 w-full after:content-[''] after:h-[1px] after:flex-1 after:bg-muted/80">
        <h2 className="text-3xl font-bold font-fira-code text-foreground">
          <span className="text-primary font-fira-code">07. </span>Open Source
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contributions.map((contrib, index) => (
          <div key={index} className="flex flex-col gap-4 bg-muted/20 p-6 rounded-lg border border-muted hover:border-primary transition-all duration-300">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2 text-primary font-fira-code text-sm">
                <FiGitPullRequest /> {contrib.status}
              </div>
              <Link href={contrib.prUrl} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FiGithub size={20} />
              </Link>
            </div>

            <h3 className="text-lg font-bold text-foreground">{contrib.prTitle}</h3>

            <p className="text-sm text-primary font-fira-code mb-2">{contrib.repo}</p>

            <p className="text-muted-foreground text-sm leading-relaxed">{contrib.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default OpenSourceContributions;
