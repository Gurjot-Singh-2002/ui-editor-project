import { useState, useContext, useEffect  } from "react";
import { EditorContext } from "../context/EditorContext";
import ProductCustomizer from "./ProductCustomizer";
import ProductGallery from "./ProductGallery";
import ProductView from "./ProductView";
import productImage from "../assets/furniture.png";

import "./LayoutDesktop.css";

const LayoutDesktop = () => {
  const { settings } = useContext(EditorContext);
  const [currentImage, setCurrentImage] = useState(productImage);
  const layoutBg = settings.layout?.sectionBg || "#f9f9f9";
  const layoutPadding = settings.layout?.containerPadding || 20;
  const cornerRadius = settings.layout?.cardCornerRadius || 8;
  

    // Applying layout background globally as CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty("--layout-bg", layoutBg);
  }, [layoutBg]);

  return (
    <div
      className="desktop-layout"
      style={{
        backgroundColor: layoutBg, 
        padding: `${layoutPadding}px`,
        borderRadius: `${cornerRadius}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "40px",
        minHeight: "100vh",
        transition: "all 0.3s ease",
        overflow: "auto",
        boxSizing: "border-box",
      }}
    >
      {/* Left Gallery */}
      <div className="gallery-wrapper">
        <ProductGallery onImageSelect={setCurrentImage} />
      </div>

      {/* Center Product View */}
      <div className="product-view-section">
        <ProductView image={currentImage} />
      </div>

      {/* Right Customizer */}
      <div
        className="customizer-section"
        style={{
          border: `${settings.stroke.weight}px solid ${settings.stroke.color}`,
          borderRadius: settings.layout.cardCornerRadius || 8,
          backgroundColor: "#fff",
          padding: `${layoutPadding}px`,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        }}
      >
        <ProductCustomizer />
      </div>
    </div>
  );
};

export default LayoutDesktop;
