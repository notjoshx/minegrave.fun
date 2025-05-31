import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [trailingPositions, setTrailingPositions] = useState<Array<{x: number, y: number}>>([]);

  useEffect(() => {
    // Hide cursor initially until it moves
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Add current position to trailing positions array and keep only the last 5
      setTrailingPositions(prev => {
        const updated = [newPosition, ...prev];
        return updated.slice(0, 5);
      });
      
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Track link hovers
    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, .hover-effect").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  // Add event listener for link detection after component mounts and DOM is ready
  useEffect(() => {
    const trackHoverableElements = () => {
      const hoverableElements = document.querySelectorAll("a, button, .hover-effect");
      
      hoverableElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };
    
    // Initial tracking
    trackHoverableElements();
    
    // Set up mutation observer to track new elements
    const observer = new MutationObserver(trackHoverableElements);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const cursorClasses = `custom-cursor ${
    hidden ? "opacity-0" : "opacity-100"
  } ${clicked ? "scale-75" : ""} ${linkHovered ? "scale-150" : ""}`;

  const cursorInvertedClasses = `cursor-inverted ${
    hidden ? "opacity-0" : ""
  } ${linkHovered ? "opacity-100 scale-75" : "opacity-30"}`;

  return (
    <>
      {/* Main cursor */}
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Trailing dots */}
      {trailingPositions.map((pos, index) => (
        <div
          key={index}
          className="fixed w-2 h-2 rounded-full bg-badminner/50 pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: 0.8 - (index * 0.15),
            scale: 1 - (index * 0.15),
          }}
        />
      ))}
      
      {/* Outer ring */}
      <div
        className={cursorInvertedClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
