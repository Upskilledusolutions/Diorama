"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/common/Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide navbar on scroll down
      } else {
        setVisible(true); // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navbar} ${visible ? styles.show : styles.hide}`}>
      <div className={styles.logo}>Diorama</div>

      {/* Mobile Menu Icon */}
      <div className={styles.mobileMenuIcon} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Desktop & Mobile Menu */}
      <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
        <ul>
          <li onClick={() => setIsMobileMenuOpen(false)}>Home</li>
          <li onClick={() => setIsMobileMenuOpen(false)}>Publications</li>
          <li onClick={() => setIsMobileMenuOpen(false)}>Workshops</li>
          <li onClick={() => setIsMobileMenuOpen(false)}>Awards</li>
          <li onClick={() => setIsMobileMenuOpen(false)}>Fellowships</li>
          <li onClick={() => setIsMobileMenuOpen(false)}>Donations</li>
          <li onClick={() => setIsMobileMenuOpen(false)}>Subscribe</li>
        </ul>
      </div>

      <div className={styles.visitbtn}>
        <button>Login</button>
      </div>
    </nav>
  );
}
