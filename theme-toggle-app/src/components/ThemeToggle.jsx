import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  const pageStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: isDark
      ? "linear-gradient(135deg, #0f172a, #020617)"
      : "linear-gradient(135deg, #e0f2fe, #fefce8)",
    transition: "background 0.4s ease",
    fontFamily: "system-ui, sans-serif",
  };

  const cardStyle = {
    width: "min(420px, 92vw)",
    padding: "32px",
    borderRadius: "24px",
    background: isDark
      ? "rgba(30, 41, 59, 0.85)"
      : "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
    color: isDark ? "#e5e7eb" : "#0f172a",
    textAlign: "center",
    transition: "all 0.3s ease",
  };

  const toggleWrapper = {
    marginTop: "28px",
    display: "flex",
    justifyContent: "center",
  };

  const toggleStyle = {
    width: "64px",
    height: "34px",
    backgroundColor: isDark ? "#22c55e" : "#cbd5f5",
    borderRadius: "999px",
    position: "relative",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const knobStyle = {
    width: "26px",
    height: "26px",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    position: "absolute",
    top: "4px",
    left: isDark ? "34px" : "4px",
    transition: "left 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginBottom: "8px" }}>
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h1>

        <p style={{ opacity: 0.85 }}>
          Toggle the switch to change the appearance of the page.
        </p>

        <div style={toggleWrapper}>
          <div style={toggleStyle} onClick={toggleTheme}>
            <div style={knobStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}
