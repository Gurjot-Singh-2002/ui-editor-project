import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";

const CustomButton = () => {
  const { settings } = useContext(EditorContext);

  const getShadow = (type) => {
    switch (type) {
      case "small":
        return "2px 2px 4px rgba(0,0,0,0.2)";
      case "medium":
        return "4px 4px 8px rgba(0,0,0,0.3)";
      case "large":
        return "6px 6px 12px rgba(0,0,0,0.4)";
      default:
        return "none";
    }
  };

  const alignStyle = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  }[settings.button.align];

  return (
    <div style={{ display: "flex", justifyContent: alignStyle }}>
      <button
        style={{
          background: settings.button.bgColor,
          color: settings.button.textColor,
          borderRadius: settings.button.borderRadius,
          padding: "10px 20px",
          border: "none",
          cursor: "pointer",
          boxShadow: getShadow(settings.button.shadow),
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CustomButton;
