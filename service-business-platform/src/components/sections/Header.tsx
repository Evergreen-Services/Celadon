"use client";

import { useEffect, useRef, useState } from "react";
import { client } from "@/config/client";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Desktop: always visible
      if (window.innerWidth >= 768) {
        setVisible(true);
        return;
      }

      // Mobile behavior
      if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: 16,
        background: "white",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.25s ease",
        zIndex: 1000
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{client.business.name}</strong>

        <nav>
          <a href="#services">Services</a>{" "}
          <a href="#gallery">Gallery</a>{" "}
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}