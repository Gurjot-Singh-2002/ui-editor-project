import { useState, useContext } from "react";
import "./ProductGallery.css";
import { EditorContext } from "../context/EditorContext";
import thumb1 from "../assets/furniture.png";
import thumb2 from "../assets/chair.jpg";
import thumb3 from "../assets/furniture.png";
import thumb4 from "../assets/chair.jpg";
import thumb5 from "../assets/chair.jpg";

const ProductGallery = ({ onImageSelect }) => {
    const { settings } = useContext(EditorContext); 
  const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5];
  const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
    if (onImageSelect) onImageSelect(thumbs[index]);
  };

  return (
    <div className="product-gallery"
    style={{
    border: `${settings.stroke.weight}px solid ${settings.stroke.color}`,
    borderRadius: settings.layout.cardCornerRadius || 8,
    padding: "10px",
    transition: "all 0.3s ease",
  }}
  >
      {thumbs.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Thumbnail ${i + 1}`}
          className={`gallery-thumb ${selected === i ? "active" : ""}`}
          onClick={() => handleClick(i)}
        />
      ))}

    </div>
  );
};

export default ProductGallery;
