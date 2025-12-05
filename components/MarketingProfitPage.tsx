import React from "react";
import { motion } from "framer-motion";

// --- Theme Definition ---
const theme = {
  brand: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6", // Primary Blue
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#020617", // Darkest slate/blue
  },
  surface: {
    card: "#0f172a", // Slate 900
    inner: "#1e293b", // Slate 800
  },
};

// --- Sub-Components ---

// 1. The Tag Component (Blue pills)
const Tag: React.FC<{ label: string; delay: number }> = ({ label, delay }) => (
  <motion.span
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ scale: 1.05, backgroundColor: theme.brand[500] }}
    style={{
      backgroundColor: theme.brand[600],
      color: "white",
      padding: "0.5rem 1.25rem",
      borderRadius: "4px",
      fontSize: "0.85rem",
      fontWeight: "600",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      display: "inline-block",
      cursor: "default",
    }}
  >
    {label}
  </motion.span>
);

// 2. The Stat Card Component
interface StatCardProps {
  value: string;
  label: string;
  subLabel?: string;
  isHighlighted?: boolean;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  subLabel,
  isHighlighted,
  index,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: isHighlighted ? theme.brand[600] : theme.surface.inner,
    backgroundImage: isHighlighted
      ? `linear-gradient(135deg, ${theme.brand[600]} 0%, ${theme.brand[800]} 100%)`
      : "none",
    padding: "2.5rem",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "220px", // Ensures the "larger" feel
    position: "relative",
    color: "white",
    boxShadow: isHighlighted
      ? "0 20px 40px -10px rgba(37, 99, 235, 0.5)"
      : "none",
    border: isHighlighted ? "none" : "1px solid rgba(255,255,255,0.05)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
      whileHover={{
        y: -5,
        boxShadow: isHighlighted
          ? "0 30px 60px -12px rgba(37, 99, 235, 0.6)"
          : "0 10px 30px -10px rgba(0,0,0,0.5)",
      }}
      style={cardStyle}
    >
      {/* Decorative Plus Icon in top right */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          color: isHighlighted ? theme.brand[300] : theme.brand[500],
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 4V20M4 12H20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div>
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}
        >
          {value}
        </motion.div>
        <div style={{ fontSize: "1.1rem", opacity: 0.9 }}>{label}</div>
      </div>

      {subLabel && (
        <div
          style={{
            fontSize: "0.9rem",
            opacity: 0.6,
            marginTop: "auto",
            maxWidth: "80%",
          }}
        >
          {subLabel}
        </div>
      )}
    </motion.div>
  );
};

// --- Main Page Component ---

const MarketingProfitPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: theme.brand[950],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    fontFamily: "'Inter', sans-serif",
    color: "white",
  };

  // The Main "Dashboard" Container - Wider now
  const dashboardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "1200px", // Larger length as requested
    backgroundColor: theme.surface.card,
    borderRadius: "24px",
    padding: "4rem",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.05), 0 25px 50px -12px rgba(0,0,0,0.5)",
  };

  const headerSectionStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    marginBottom: "4rem",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsive 3-column
    gap: "2rem",
  };

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={dashboardStyle}
      >
        {/* Top Header Section */}
        <div style={headerSectionStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: "3rem",
                fontWeight: "700",
                maxWidth: "700px",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Turn Marketing Spend Into{" "}
              <motion.span
                initial={{ color: "#ffffff" }}
                animate={{ color: theme.brand[400] }}
                transition={{ delay: 1, duration: 1 }}
              >
                Profit Engines
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                fontWeight: "700",
                letterSpacing: "0.1em",
                fontSize: "1.2rem",
              }}
            >
              EVOC LABS
            </motion.div>
          </div>

          {/* Tags Row */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              "Strategy",
              "Creative",
              "Media Buying",
              "Data Analysis",
              "CRO",
            ].map((tag, i) => (
              <Tag key={tag} label={tag} delay={0.6 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Stats Grid Section */}
        <div style={gridStyle}>
          {/* Card 1: Highlighted (Blue) */}
          <StatCard
            index={0}
            value="4+"
            label="Years of Experience"
            subLabel="Mastering the algorithm"
            isHighlighted={true}
          />

          {/* Card 2: Dark */}
          <StatCard
            index={1}
            value="150+"
            label="Brands Scaled"
            subLabel="From startups to enterprise"
          />

          {/* Card 3: Dark */}
          <StatCard
            index={2}
            value="2CR+"
            label="Ad Spend Managed"
            subLabel="With profitable returns"
          />
        </div>

        {/* Bottom CTA Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: "4rem",
            textAlign: "center",
            borderTop: `1px solid ${theme.surface.inner}`,
            paddingTop: "2rem",
          }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: theme.brand[600],
              color: "white",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "transparent",
              border: `1px solid ${theme.brand[600]}`,
              color: theme.brand[400],
              padding: "1rem 3rem",
              borderRadius: "50px",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            BOOK A STRATEGY CALL
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MarketingProfitPage;
