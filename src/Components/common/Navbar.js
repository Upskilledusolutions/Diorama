"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/common/Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmissionsOpen, setIsSubmissionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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

  // When mobile menu closes, also close dropdowns
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsSubmissionsOpen(false);
      setIsAboutOpen(false);
    }
  }, [isMobileMenuOpen]);

  // Toggle dropdown only on mobile
  const handleDropdownClick = (dropdownSetter) => (e) => {
    if (window.innerWidth < 768) {
      e.stopPropagation();
      dropdownSetter((prev) => !prev);
    }
  };

  return (
    <nav className={`${styles.navbar} ${visible ? styles.show : styles.hide}`}>
      <div className={styles.logo}>Diorama</div>

      {/* Mobile Menu Icon */}
      <div
        className={styles.mobileMenuIcon}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Menu */}
      <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
        <ul className={styles.flex}>
          <Link href="/" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/Poetry" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Poetry</Link>
          <Link href="/Prose" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Prose</Link>
          <Link href="/CreativeNonFiction" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Creative Non-Fiction</Link>
          <Link href="/Gallery" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>

          {/* Submissions Dropdown */}
          <Link
            href="/Submissions"
            className={`${styles.dropdown} ${styles.li} ${isSubmissionsOpen ? styles.open : ""}`}
            onClick={handleDropdownClick(setIsSubmissionsOpen)}
          >
            Submissions
            <ul className={styles.dropdownMenu}>
              <Link href="/Submissions/HowtoSubmit" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>How to Submit</Link>
              <Link href="/Submissions/FAQs" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            </ul>
          </Link>

          {/* About Dropdown */}
          <Link
            href="/About"
            className={`${styles.dropdown} ${styles.li} ${isAboutOpen ? styles.open : ""}`}
            onClick={handleDropdownClick(setIsAboutOpen)}
          >
            About
            <ul className={styles.dropdownMenu}>
              <Link href="/About/OurTeam" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
              <Link href="/PrivacyPolicy" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link>
              <Link href="/TnC" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Terms & Conditions</Link>
            </ul>
          </Link>
        </ul>
      </div>

      {/* Login Button (Hidden on mobile) */}
      <div className={styles.visitbtn}>
        <button>Login</button>
      </div>
    </nav>
  );
}
