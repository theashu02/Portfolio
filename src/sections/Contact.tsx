import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="min-h-screen max-w-2xl mx-auto flex flex-col justify-center items-center text-center px-10 py-24 mb-10"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="text-primary font-fira-code text-lg mb-4">04. What&apos;s Next?</h2>
      <h2 className="text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-12">Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.</p>
      <div className="mt-6">
        <Button link="mailto:ashutoshchauhan1919@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
