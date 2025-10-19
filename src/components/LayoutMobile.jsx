import { useContext, useEffect } from "react";
import { EditorContext } from "../context/EditorContext";
import "./LayoutMobile.css";

const LayoutMobile = () => {
  const { settings } = useContext(EditorContext);

  // Extracting layout values
  const layoutBg = settings.layout?.sectionBg || "#f9f9f9";
  const layoutPadding = settings.layout?.containerPadding || 16;
  const cornerRadius = settings.layout?.cardCornerRadius || 8;

  useEffect(() => {
    document.documentElement.style.setProperty("--layout-bg", layoutBg);
  }, [layoutBg]);

  return (
    <div
      className="mobile-layout"
      style={{
        backgroundColor: layoutBg,
        padding: `${layoutPadding}px`,
        borderRadius: `${cornerRadius}px`,
        boxSizing: "border-box",
        minHeight: "100vh",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "20px",
        transition: "all 0.3s ease",
      }}
    >
      {/* Product Title */}
      <h2
        style={{
          margin: 0,
          fontFamily: settings.typography.fontFamily,
          fontSize: settings.typography.fontSize + 4,
          fontWeight: settings.typography.fontWeight,
          color: "#333",
          textAlign: "center",
        }}
      >
        Cozy Lounge Chair
      </h2>

      {/* Product Image */}
      <img
        src="/assets/furniture.png"
        alt="Product"
        style={{
          width: "100%",
          maxWidth: 280,
          height: "auto",
          borderRadius: `${cornerRadius}px`,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          border: `${settings.stroke.weight}px solid ${settings.stroke.color}`,
          transition: "all 0.3s ease",
        }}
      />

      {/* Add to Cart Button */}
      <button
        style={{
          backgroundColor: settings.button.bgColor,
          color: settings.button.textColor,
          borderRadius: settings.button.borderRadius,
          padding: "12px 28px",
          fontWeight: 600,
          fontSize: "1rem",
          border: "none",
          cursor: "pointer",
          boxShadow:
            settings.button.shadow === "small"
              ? "0 2px 4px rgba(0,0,0,0.15)"
              : settings.button.shadow === "medium"
              ? "0 4px 8px rgba(0,0,0,0.2)"
              : settings.button.shadow === "large"
              ? "0 6px 12px rgba(0,0,0,0.25)"
              : "none",
          alignSelf:
            settings.button.align === "left"
              ? "flex-start"
              : settings.button.align === "right"
              ? "flex-end"
              : "center",
          transition: "all 0.3s ease",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default LayoutMobile;
