import { useState, useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import "./ProductCustomizer.css";

const ProductCustomizer = () => {
  const { settings } = useContext(EditorContext);
  const [openSection, setOpenSection] = useState("arms");
  const [selectedColor, setSelectedColor] = useState("#5C4033");

  const materials = {
    leather: [
      { name: "Leather Brown", color: "#5C4033" },
      { name: "Camel", color: "#A56C43" },
      { name: "Steel Grey", color: "#36454F" },
      { name: "Ash", color: "#708090" },
      { name: "Olive", color: "#355E3B" },
      { name: "Maroon", color: "#B33A3A" },
    ],
    silicon: [
      { name: "Taupe", color: "#6B5B4B" },
      { name: "Moss", color: "#78866B" },
      { name: "Graphite", color: "#544E56" },
      { name: "Charcoal", color: "#3D3C3A" },
      { name: "Grey Mist", color: "#707070" },
    ],
    aluminum: [
      { name: "Silver", color: "#C0C0C0" },
      { name: "Dark Gray", color: "#A9A9A9" },
      { name: "Light Gray", color: "#D3D3D3" },
      { name: "Soft White", color: "#E8E8E8" },
      { name: "Matte Steel", color: "#B0B0B0" },
    ],
  };

  return (
    <div
      className="product-customizer"
      style={{
        fontFamily: settings.typography.fontFamily,
        fontSize: settings.typography.fontSize,
        fontWeight: settings.typography.fontWeight,
        background: "transparent", 
        transition: "all 0.3s ease",
      }}
    >
      <h3>Cozy Lounge Chair</h3>
      <p className="subtitle">Customize your Chair</p>

      {/* Scrollable middle section */}
      <div className="customizer-scroll">
        {/* 1. Arms */}
        <div
          className={`section ${openSection === "arms" ? "open highlight" : ""}`}
          onClick={() => setOpenSection(openSection === "arms" ? null : "arms")}
        >
          <div className="section-header">
            <span>1. Arms</span>
            <span>
              <i
                className={`fa-solid ${
                  openSection === "arms" ? "fa-caret-up" : "fa-caret-down"
                }`}
              ></i>
            </span>
          </div>
          {openSection === "arms" && (
            <div className="section-content">
              <p className="option-text">Fixed Arms</p>
            </div>
          )}
        </div>

        {/* 2. Arm Finish */}
        <div
          className={`section ${openSection === "finish" ? "open highlight" : ""}`}
          onClick={() =>
            setOpenSection(openSection === "finish" ? null : "finish")
          }
        >
          <div className="section-header">
            <span>2. Arms Finish</span>
            <span>
              <i
                className={`fa-solid ${
                  openSection === "finish" ? "fa-caret-up" : "fa-caret-down"
                }`}
              ></i>
            </span>
          </div>
          {openSection === "finish" && (
            <div className="section-content">
              <p className="material-type">LEATHER</p>
              <div className="color-grid">
                {materials.leather.map((item, i) => (
                  <div
                    key={i}
                    className={`color-swatch ${
                      selectedColor === item.color ? "selected" : ""
                    }`}
                    style={{ background: item.color }}
                    title={item.name}
                    onClick={() => setSelectedColor(item.color)}
                  ></div>
                ))}
              </div>

              <p className="material-type">SILICON</p>
              <div className="color-grid">
                {materials.silicon.map((item, i) => (
                  <div
                    key={i}
                    className={`color-swatch ${
                      selectedColor === item.color ? "selected" : ""
                    }`}
                    style={{ background: item.color }}
                    title={item.name}
                    onClick={() => setSelectedColor(item.color)}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 3. Legs Finish */}
        <div
          className={`section ${openSection === "legs" ? "open highlight" : ""}`}
          onClick={() => setOpenSection(openSection === "legs" ? null : "legs")}
        >
          <div className="section-header">
            <span>3. Legs Finish</span>
            <span>
              <i
                className={`fa-solid ${
                  openSection === "legs" ? "fa-caret-up" : "fa-caret-down"
                }`}
              ></i>
            </span>
          </div>
          {openSection === "legs" && (
            <div className="section-content">
              <p className="option-text">Steel</p>
              <div className="color-grid">
                {materials.aluminum.map((item, i) => (
                  <div
                    key={i}
                    className={`color-swatch ${
                      selectedColor === item.color ? "selected" : ""
                    }`}
                    style={{ background: item.color }}
                    title={item.name}
                    onClick={() => setSelectedColor(item.color)}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>


      {/* Price fixed at bottom */}
      <div className="price-section">
        <div className="price-info">
          <p className="product-price-label">Product Price</p>
          <p className="price">
            $200 <span>$245</span>
          </p>
        </div>
        <button
          style={{
            backgroundColor: settings.button.bgColor,
            color: settings.button.textColor,
            borderRadius: settings.button.borderRadius,
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
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCustomizer;
