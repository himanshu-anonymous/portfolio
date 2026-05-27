import { motion } from "framer-motion";

interface GlassyButtonProps {
  children?: React.ReactNode;
  text?: string;
  label?: string;
  onClick?: () => void;
  title?: string;
}

export default function GlassyButton({
  children,
  text,
  label,
  onClick,
}: GlassyButtonProps) {
  const buttonText = text || label || children || "ACTION";

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "160px",      // premium fixed layout widths matching the Framer spec
        height: "56px",      // matching high-end square-ish/rectangular bounds
        borderRadius: "28px", // highly rounded squircle corners (border-radius 28px/40px)
        fontFamily: "'Geist', sans-serif",
        fontSize: "13px",
        fontWeight: "600",
        letterSpacing: "1px",
        textTransform: "uppercase",
        cursor: "pointer",
        outline: "none",
        
        // Exact Framer neutral glass styling - No color enhancements
        border: "1px solid rgba(255, 255, 255, 0.08)",
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(0, 0, 0, 0.25) 100%)",
        color: "#ffffff",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        
        // Framer high-contrast glass shadows
        boxShadow: `
          0.06px 1px 0.5px rgba(0, 0, 0, 0.05),
          0.15px 2.3px 1.1px rgba(0, 0, 0, 0.08),
          0.29px 4.3px 2.1px rgba(0, 0, 0, 0.1),
          2px 4px 0px rgba(255, 255, 255, 0.02)
        `,
        transition: "border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
        e.currentTarget.style.background = "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.3) 100%)";
        e.currentTarget.style.boxShadow = `
          0 10px 30px rgba(0, 0, 0, 0.4),
          inset 0px 0px 2px 1px rgba(255, 255, 255, 0.1)
        `;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.background = "linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(0, 0, 0, 0.25) 100%)";
        e.currentTarget.style.boxShadow = `
          0.06px 1px 0.5px rgba(0, 0, 0, 0.05),
          0.15px 2.3px 1.1px rgba(0, 0, 0, 0.08),
          0.29px 4.3px 2.1px rgba(0, 0, 0, 0.1),
          2px 4px 0px rgba(255, 255, 255, 0.02)
        `;
      }}
    >
      {buttonText}
    </motion.button>
  );
}
