import { motion } from "framer-motion";
import { Children, useState, useRef, useEffect } from "react";

interface StackingSliderProps {
  children?: React.ReactNode;
  cardGap?: number;
  stackOffset?: number;
  mobileStackOffset?: number;
  leftArrowIcon?: string;
  rightArrowIcon?: string;
  arrowSize?: number;
  arrowColor?: string;
  arrowBackgroundColor?: string;
  arrowHoverColor?: string;
  arrowBorderRadius?: number;
  arrowGap?: number;
  buttonPosition?: "left" | "center" | "right";
  transition?: any;
  disabledArrowOpacity?: number;
}

export default function StackingSlider({
  children,
  cardGap = 20,
  stackOffset = 20,
  mobileStackOffset = 0,
  leftArrowIcon,
  rightArrowIcon,
  arrowSize = 48,
  arrowColor = "#5eead4", // neon teal matching main theme
  arrowBackgroundColor = "rgba(10, 14, 23, 0.6)",
  arrowHoverColor = "rgba(94, 234, 212, 0.15)",
  arrowBorderRadius = 100,
  arrowGap = 32,
  buttonPosition = "center",
  transition = { duration: 0.45, ease: "easeInOut" },
  disabledArrowOpacity = 0.3,
}: StackingSliderProps) {
  const childrenArray = Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardWidth, setCardWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<"left" | "right" | null>(null);

  // Get card width from first card
  useEffect(() => {
    const updateDimensions = () => {
      if (cardRefs.current[0]) {
        setCardWidth(cardRefs.current[0].offsetWidth);
      }
      setIsMobile(window.innerWidth < 992);
    };
    updateDimensions();
    const timer = setTimeout(updateDimensions, 100);
    window.addEventListener("resize", updateDimensions);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [childrenArray.length]);

  const activeOffset = isMobile ? mobileStackOffset : stackOffset;

  const goToNext = () => {
    if (currentIndex < childrenArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getCardTransform = (index: number) => {
    if (index < currentIndex) {
      // Cards BEFORE current: each has its own stack position
      const slideMove = (cardWidth + cardGap - activeOffset) * index;
      return -slideMove;
    } else {
      // Current card AND cards after: all move together by current amount
      const slideMove = (cardWidth + cardGap - activeOffset) * currentIndex;
      return -slideMove;
    }
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex === childrenArray.length - 1;

  const getButtonAlignment = () => {
    switch (buttonPosition) {
      case "center":
        return "center";
      case "right":
        return "flex-end";
      default:
        return "flex-start";
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: `${arrowGap}px`,
      }}
    >
      {/* Cards Container */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          height: "100%",
          position: "relative",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "fit-content",
            position: "relative",
            gap: `${cardGap}px`,
          }}
        >
          {childrenArray.map((child, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              animate={{ x: getCardTransform(index) }}
              transition={transition}
              style={{
                flexShrink: 0,
                position: "relative",
                // Z-index: first card = 1, second = 2, third = 3, etc
                zIndex: index + 1,
              }}
            >
              {child}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {childrenArray.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: getButtonAlignment(),
            marginTop: "10px",
          }}
        >
          {/* Previous Button */}
          <button
            onClick={goToPrev}
            disabled={isAtStart}
            onMouseEnter={() => setHoveredButton("left")}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              width: `${arrowSize}px`,
              height: `${arrowSize}px`,
              minWidth: `${arrowSize}px`,
              minHeight: `${arrowSize}px`,
              flexShrink: 0,
              background:
                hoveredButton === "left" && !isAtStart
                  ? arrowHoverColor
                  : arrowBackgroundColor,
              border: "1px solid rgba(94, 234, 212, 0.2)",
              borderRadius: `${arrowBorderRadius}px`,
              cursor: isAtStart ? "not-allowed" : "pointer",
              opacity: isAtStart ? disabledArrowOpacity : 1,
              transition: "opacity 0.2s ease, background 0.2s ease, border-color 0.2s ease",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
              color: arrowColor,
            }}
          >
            {leftArrowIcon ? (
              <img
                src={leftArrowIcon}
                alt="Previous"
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />
            ) : (
              <svg
                width={arrowSize * 0.5}
                height={arrowSize * 0.5}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            )}
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={isAtEnd}
            onMouseEnter={() => setHoveredButton("right")}
            onMouseLeave={() => setHoveredButton(null)}
            style={{
              width: `${arrowSize}px`,
              height: `${arrowSize}px`,
              minWidth: `${arrowSize}px`,
              minHeight: `${arrowSize}px`,
              flexShrink: 0,
              background:
                hoveredButton === "right" && !isAtEnd
                  ? arrowHoverColor
                  : arrowBackgroundColor,
              border: "1px solid rgba(94, 234, 212, 0.2)",
              borderRadius: `${arrowBorderRadius}px`,
              cursor: isAtEnd ? "not-allowed" : "pointer",
              opacity: isAtEnd ? disabledArrowOpacity : 1,
              transition: "opacity 0.2s ease, background 0.2s ease, border-color 0.2s ease",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              outline: "none",
              color: arrowColor,
            }}
          >
            {rightArrowIcon ? (
              <img
                src={rightArrowIcon}
                alt="Next"
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />
            ) : (
              <svg
                width={arrowSize * 0.5}
                height={arrowSize * 0.5}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
