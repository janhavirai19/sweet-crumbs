"use client";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsapp =
    "https://wa.me/919876543210?text=Hi%20Sweet%20Crumbs!%20I%20would%20like%20to%20order%20a%20cake.";
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Sweet<span>Crumbs</span>
        <small>CAKES & BAKES</small>
      </a>
      <div className={`nav-links ${open ? "show" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#cakes" onClick={() => setOpen(false)}>Cakes</a>
        <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
      <a
        href={whatsapp}
        target="_blank"
        className="nav-whatsapp"
      >
        💬 Order Now
      </a>
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>
  );
}