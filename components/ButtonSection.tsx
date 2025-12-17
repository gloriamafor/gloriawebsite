// components/ButtonSection.jsx
"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from "react-icons/fa";
import styles from "./ButtonSection.module.css";

const ButtonSection = () => {
  return (
    <section className="button-section">
      <h2 className="button-section-title">Connect with Me</h2>

      <div className="buttons-container">
        <a href="#" className="btn">
          <FaGithub className="icon" />
          My Project
        </a>

        <a href="#" className="btn">
          <FaFileAlt className="icon" />
          Resume
        </a>

        <a href="#" className="btn">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>

        <a href="#" className="btn">
          <FaEnvelope className="icon" />
          Contact
        </a>
      </div>
    </section>
  );
};

export default ButtonSection;
