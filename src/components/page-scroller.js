import { useRef, useEffect, useState } from "react";

import "../styles/page-scroller.css";

function PageScroller({ children }) {
    const sectionsRef = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSections, setTotalSections] = useState(0); // Track the number of sections
    const isScrollingRef = useRef(false); // to lock scroll event temporarily

    useEffect(() => {
        sectionsRef.current = document.querySelectorAll(".scroll-section");
        setTotalSections(sectionsRef.current.length); // Set the total sections
        scrollToSection(currentIndex); // Scroll to the initial section
    }, []);

    useEffect(() => {
        // MOUSE WHEEL SCROLL
        const handleWheel = (e) => {
            if (isScrollingRef.current) return;

            isScrollingRef.current = true;
            const delta = e.deltaY;
            let newIndex = currentIndex;

            if (delta > 0 && currentIndex < sectionsRef.current.length - 1) {
                // scroll down
                newIndex = currentIndex + 1;
            } else if (delta < 0 && currentIndex > 0) {
                // scroll up
                newIndex = currentIndex - 1;
            }

            if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
                scrollToSection(newIndex);
            } else {
                // If index didn't change, unlock scrolling sooner
                isScrollingRef.current = false;
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [currentIndex]);

    useEffect(() => {
        // KEYBOARD SCROLL
        const handleKeyDown = (e) => {
            if (isScrollingRef.current) return;

            let newIndex = currentIndex;
            // Check which key was pressed
            switch (e.key) {
                case "ArrowDown":
                case "PageDown":
                    if (currentIndex < sectionsRef.current.length - 1) {
                        newIndex = currentIndex + 1;
                    }
                    break;
                case "ArrowUp":
                case "PageUp":
                    if (currentIndex > 0) {
                        newIndex = currentIndex - 1;
                    }
                    break;
                default:
                    return; // If it's another key, do nothing
            }

            // If index changed, scroll to the new section
            if (newIndex !== currentIndex) {
                // Prevent default so the browser doesn't do the normal scroll
                e.preventDefault();
                isScrollingRef.current = true;
                setCurrentIndex(newIndex);
                scrollToSection(newIndex);
            }
        };

        window.addEventListener("keydown", handleKeyDown, { passive: false });
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentIndex]);

    // Smoothly scroll to a given section by index
    const scrollToSection = (idx) => {
        sectionsRef.current[idx].scrollIntoView({ behavior: "smooth" });

        // Wait until the smooth scroll is done
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 300);
    };

    // Handle clicking on a dot
    const handleDotClick = (i) => {
        if (i === currentIndex) return; // Already on this section
        isScrollingRef.current = true;
        setCurrentIndex(i);
        scrollToSection(i);
    };

    return (
        <div className="scroll-container">
            {children}
            <aside className="dots-navigation">
                {Array.from({ length: totalSections }).map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(i)}
                    ></div>
                ))}
            </aside>
        </div>
    );
}

export default PageScroller;
