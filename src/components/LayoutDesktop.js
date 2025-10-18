import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import CustomButton from "./CustomButton";

const LayoutDesktop = () => {
  const { settings } = useContext(EditorContext);

  return (
    <div
      style={{
        border: `${settings.stroke.weight}px solid ${settings.stroke.color}`,
        borderRadius: 8,
        padding: 20,
        maxWidth: 400,
        margin: "0 auto",
        backgroundColor: "#fff",
        transition: "all 0.2s ease",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>Cozy Lounge Chair</h2>
      <p style={{ color: "#555", marginBottom: "16px" }}>
        Premium quality chair with modern design
        </p>
      <CustomButton />
    </div>
  );
};

export default LayoutDesktop;
