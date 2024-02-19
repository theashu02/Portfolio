import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
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
      <h2 className="contact-title">For Contact</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Looking for an opportunity to work in a challenging position
        combining my skills in Software Engineering, which provides professional
        development, interesting experiences and personal growth.
      </p>
      <div className="contact-cta">
        <Button link="mailto:ashutoshchauhan1919@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
