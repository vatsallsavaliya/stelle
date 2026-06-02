import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.scss';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const size = 12; 
    
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    let isHovering = false;

    const moveCursor = (e) => {
      xTo(e.clientX - size / 2);
      yTo(e.clientY - size / 2);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('[data-cursor="hover"]')) {
        isHovering = true;
        gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: "power2.out" });
      }
    };

    const handleMouseOut = (e) => {
      if (isHovering && !e.relatedTarget?.closest('[data-cursor="hover"]')) {
        isHovering = false;
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef}></div>;
}