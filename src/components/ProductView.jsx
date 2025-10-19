import { useState, useContext } from "react";
import "./ProductView.css";
import defaultImage from "../assets/furniture.png";
import { EditorContext } from "../context/EditorContext";

const ProductView = ({ image }) => {
  const { settings } = useContext(EditorContext);
  const [scale, setScale] = useState(1);
  const [preview, setPreview] = useState(false);

  const handleZoomIn = () => setScale((s) => Math.min(s + 0.1, 1.5));
  const handleZoomOut = () => setScale((s) => Math.max(s - 0.1, 0.8));

  // to use passed image or fallback
  const displayedImage = image || defaultImage;

  return (
    <>
      <div
        className="product-view"
        style={{
          outline: `${settings.stroke.weight}px solid ${settings.stroke.color}`,
          borderRadius: settings.layout.cardCornerRadius || 8,
          outlineOffset: "-1px",
          transition: "all 0.3s ease",
        }}
      >
        <div
          className="image-container"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease",
          }}
        >
          <img
            src={displayedImage}
            alt="Product"
            className="main-product"
          />
          <div className="shadow"></div>
        </div>

        <div className="action-icons">
          <button title="Zoom In" onClick={handleZoomIn}>
            <i className="fa-solid fa-magnifying-glass-plus"></i>
          </button>
          <button title="Zoom Out" onClick={handleZoomOut}>
            <i className="fa-solid fa-magnifying-glass-minus"></i>
          </button>
          <button title="Preview" onClick={() => setPreview(true)}>
            <i className="fa-solid fa-eye"></i>
          </button>
        </div>


        <button className="view-room">View in your room</button>
      </div>

      {preview && (
        <div className="preview-overlay" onClick={() => setPreview(false)}>
          <img
            src={displayedImage}
            alt="Preview"
            className="preview-image"
          />
          <button
            className="close-preview"
            onClick={() => setPreview(false)}
            title="Close Preview"
          >
            x
          </button>
        </div>
      )}
    </>
  );
};

export default ProductView;
