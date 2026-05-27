import { useState, useEffect, useRef, useMemo, startTransition } from "react";

interface WordItem {
  word: string;
}

interface TypewriterEffectProps {
  words?: WordItem[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursorColor?: string;
  cursorWidth?: number;
  cursorHeight?: number;
  font?: any;
  textColor?: string;
  style?: any;
  text?: string;
}

export default function TypewriterEffect({
  words = [{ word: "ARTFOLIO" }],
  typingSpeed = 120,
  deletingSpeed = 80,
  pauseDuration = 2000,
  cursorColor = "#ffffff",
  cursorWidth = 2,
  cursorHeight = 100,
  font = {},
  textColor = "#eae5ec",
  style,
  text,
}: TypewriterEffectProps) {
  const customWords = useMemo(() => {
    if (text) return [{ word: text }];
    return words;
  }, [words, text]);

  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const timeoutRef = useRef<number | null>(null);
  const blinkRef = useRef<number | null>(null);

  const currentWord = customWords.length > 0 ? customWords[wordIndex % customWords.length].word : "";

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    let delay = typingSpeed;

    if (!isDeleting && charIndex < currentWord.length) {
      delay = typingSpeed;
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => {
          setDisplayed(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        });
      }, delay);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => setIsDeleting(true));
      }, pauseDuration);
    } else if (isDeleting && charIndex > 0) {
      delay = deletingSpeed;
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => {
          setDisplayed(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        });
      }, delay);
    } else if (isDeleting && charIndex === 0) {
      timeoutRef.current = window.setTimeout(() => {
        startTransition(() => {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % customWords.length);
        });
      }, pauseDuration);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, isDeleting, wordIndex, currentWord, typingSpeed, deletingSpeed, pauseDuration, customWords]);

  useEffect(() => {
    if (!isDeleting) {
      startTransition(() => setCharIndex(0));
    }
  }, [wordIndex, isDeleting]);

  useEffect(() => {
    blinkRef.current = window.setInterval(() => {
      startTransition(() => setShowCursor((v) => !v));
    }, 500);
    return () => {
      if (blinkRef.current) clearInterval(blinkRef.current);
    };
  }, []);

  const fontSizeVal = useMemo(() => {
    if (font && font.fontSize) {
      if (typeof font.fontSize === "string" && font.fontSize.endsWith("px")) {
        return parseFloat(font.fontSize);
      } else if (typeof font.fontSize === "number") {
        return font.fontSize;
      }
    }
    return 60; // beautiful default title scale
  }, [font]);

  return (
    <span
      style={{
        fontSize: fontSizeVal,
        ...style,
        ...font,
        color: textColor,
        display: "inline-flex",
        alignItems: "center",
        minWidth: 1,
        minHeight: 1,
        width: "max-content",
        height: "max-content",
        whiteSpace: "pre",
        textTransform: "uppercase",
      }}
      aria-live="polite"
    >
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          background: cursorColor,
          width: cursorWidth,
          height: fontSizeVal * (cursorHeight / 100),
          marginLeft: 4,
          marginRight: 4,
          verticalAlign: "middle",
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
          borderRadius: 2,
          boxShadow: `0 0 12px ${cursorColor}`,
        }}
      />
    </span>
  );
}
