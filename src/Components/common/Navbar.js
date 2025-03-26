"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/common/Navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmissionsOpen, setIsSubmissionsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobiledrop, setMobiledrop] = useState(false)

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 200) {
        setVisible(true); // Always show navbar before 200px scroll
      } else if (currentScrollY > lastScrollY) {
        setVisible(false); // Hide when scrolling down past 200px
      } else {
        setVisible(true); // Show when scrolling up
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

  return (
    <nav className={`${styles.navbar} ${visible ? styles.show : styles.hide}`}>
      <div className={styles.logo}>Diorama</div>

      {/* Mobile Menu Icon */}
      <div
        className={styles.mobileMenuIcon}
        onClick={() => setMobiledrop(!mobiledrop)}
      >
        {isMobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* Navigation Menu */}
      <div className={`${styles.links} ${isMobileMenuOpen ? styles.mobileOpen : ""}`}>
        <ul className={styles.flex}>
          <Link href="/" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>

          <div className={styles.linkcontainer} onClick={()=>setDropdown(!dropdown)}>
            <div>
            <Link href="/Poetry" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Poetry</Link>
            <ul className={dropdown && innerWidth < 768 ? styles.dropdownMenu3 : styles.dropdownMenu2}>
              <Link href="/Poetry/Featured" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Featured Poetry</Link>
              <Link href="/Poetry/Emerging" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Emerging Poetry</Link>
              <Link href="/Poetry/Recent" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Recent Poetry</Link>
            </ul>
            </div>
            <MdArrowForwardIos className={styles.dropdownarr}/>
          </div>

          <div className={styles.linkcontainer} onClick={()=>setDropdown(!dropdown)}>
            <div>
            <Link href="/Prose" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Prose</Link>
            <ul className={dropdown && innerWidth < 768 ? styles.dropdownMenu3 : styles.dropdownMenu2}>
            <Link href="/Prose/Featured" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Featured Prose</Link>
            <Link href="/Prose/Emerging" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Emerging Prose</Link>
            <Link href="/Prose/Recent" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Recent Prose</Link>
            </ul>
            </div>
            <MdArrowForwardIos className={styles.dropdownarr}/>
          </div>

          <div className={styles.linkcontainer} onClick={()=>setDropdown(!dropdown)}>
            <div>
            <Link href="/CreativeNonFiction" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Creative Non-Fiction</Link>
            <ul className={dropdown && innerWidth < 768 ? styles.dropdownMenu3 : styles.dropdownMenu2}>
            <Link href="/CreativeNonFiction/Featured" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Featured Creative Non-Fiction</Link>
            <Link href="/CreativeNonFiction/Emerging" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Emerging Creative Non-Fiction</Link>
            <Link href="/CreativeNonFiction/Recent" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Recent Creative Non-Fiction</Link>
            </ul>
            </div>
            <MdArrowForwardIos className={styles.dropdownarr}/>
          </div>

          <Link href="/Gallery" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <Link href="/NewsnEvents" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>News & Events</Link>
          <div className={styles.linkcontainer} onClick={()=>setDropdown(!dropdown)}>
            <div>
            <Link href="/Submissions" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Submissions</Link>
            <ul className={dropdown && innerWidth < 768 ? styles.dropdownMenu3 : styles.dropdownMenu2}>
              <Link href="/Submissions/HowtoSubmit" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>How to Submit</Link>
              <Link href="/Submissions/FAQs" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
            </ul>
            </div>
            <MdArrowForwardIos className={styles.dropdownarr}/>
          </div>
          <div className={styles.linkcontainer} onClick={()=>setDropdown(!dropdown)}>
          <div>
            <Link href="/About" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <ul className={dropdown && innerWidth < 768 ? styles.dropdownMenu3 : styles.dropdownMenu2}>
              <Link href="/About/OurTeam" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
              <Link href="/PrivacyPolicy" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Privacy Policy</Link>
              <Link href="/TnC" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Terms & Conditions</Link>
              <Link href="/About/FollowUs" className={styles.li} onClick={() => setIsMobileMenuOpen(false)}>Follow Us</Link>
            </ul>
            </div>
            <MdArrowForwardIos className={styles.dropdownarr}/>
          </div>

        </ul>
      </div>

      <div className={mobiledrop ? styles.mobilelinks : styles.mobilelinks1}>
      {/* Home */}
      <div>
        <Link href={"/"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Home</Link>
      </div>

      {/* Poetry Dropdown */}
      <div>
        <div className={styles.dropdownHeader} onClick={() => toggleDropdown(1)}>
          <Link href={"/Poetry"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Poetry</Link>
          <MdArrowForwardIos className={`${styles.dropdownarr} ${openDropdown === 1 ? styles.rotate : ""}`} />
        </div>
        <div className={`${styles.dropdownContent} ${openDropdown === 1 ? styles.open : ""}`}>
          <Link href={"/Poetry/Featured"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Featured Poetry</Link>
          <Link href={"/Poetry/Emerging"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Emerging Poetry</Link>
          <Link href={"/Poetry/Recent"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Recent Poetry</Link>
        </div>
      </div>

      {/* Prose Dropdown */}
      <div>
        <div className={styles.dropdownHeader} onClick={() => toggleDropdown(2)}>
          <Link href={"/Prose"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Prose</Link>
          <MdArrowForwardIos className={`${styles.dropdownarr} ${openDropdown === 2 ? styles.rotate : ""}`} />
        </div>
        <div className={`${styles.dropdownContent} ${openDropdown === 2 ? styles.open : ""}`}>
          <Link href={"/Prose/Featured"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Featured Prose</Link>
          <Link href={"/Prose/Emerging"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Emerging Prose</Link>
          <Link href={"/Prose/Recent"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Recent Prose</Link>
        </div>
      </div>

      {/* Creative Non-Fiction Dropdown */}
      <div>
        <div className={styles.dropdownHeader} onClick={() => toggleDropdown(3)}>
          <Link href={"/CreativeNonFiction"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Creative Non-Fiction</Link>
          <MdArrowForwardIos className={`${styles.dropdownarr} ${openDropdown === 3 ? styles.rotate : ""}`} />
        </div>
        <div className={`${styles.dropdownContent} ${openDropdown === 3 ? styles.open : ""}`}>
          <Link href={"/CreativeNonFiction/Featured"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Featured Creative Non-Fiction</Link>
          <Link href={"/CreativeNonFiction/Emerging"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Emerging Creative Non-Fiction</Link>
          <Link href={"/CreativeNonFiction/Recent"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Recent Creative Non-Fiction</Link>
        </div>
      </div>

      {/* Gallery */}
      <div>
        <Link href={"/Gallery"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Gallery</Link>
      </div>

      {/* News & Events */}
      <div>
        <Link href={"/NewsnEvents"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>News & Events</Link>
      </div>

      {/* Submissions Dropdown */}
      <div>
        <div className={styles.dropdownHeader} onClick={() => toggleDropdown(4)}>
          <Link href={"/Submissions"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Submissions</Link>
          <MdArrowForwardIos className={`${styles.dropdownarr} ${openDropdown === 4 ? styles.rotate : ""}`} />
        </div>
        <div className={`${styles.dropdownContent} ${openDropdown === 4 ? styles.open : ""}`}>
          <Link href={"/Submissions/HowtoSubmit"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>How to Submit</Link>
          <Link href={"/Submissions/FAQs"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>FAQs</Link>
        </div>
      </div>

      {/* About Dropdown */}
      <div>
        <div className={styles.dropdownHeader} onClick={() => toggleDropdown(5)}>
          <Link href={"/About"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>About</Link>
          <MdArrowForwardIos className={`${styles.dropdownarr} ${openDropdown === 5 ? styles.rotate : ""}`} />
        </div>
        <div className={`${styles.dropdownContent} ${openDropdown === 5 ? styles.open : ""}`}>
          <Link href={"/About/OurTeam"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Our Team</Link>
          <Link href={"/PrivacyPolicy"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Privacy Policy</Link>
          <Link href={"/TnC"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Terms & Conditions</Link>
          <Link href={"/About/FollowUs"} onClick={()=>[setMobiledrop(false), setOpenDropdown(null)]} className={styles.normalink}>Follow Us</Link>
        </div>
      </div>
    </div>

      {/* Login Button (Hidden on mobile) */}
      <div className={styles.visitbtn}>
        <button>Login</button>
      </div>
    </nav>
  );
}
