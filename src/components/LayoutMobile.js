import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import CustomButton from "./CustomButton";

const LayoutMobile = () => {
  const { settings } = useContext(EditorContext);

  return (
    <div
      style={{
        border: `${settings.stroke.weight}px solid ${settings.stroke.color}`,
        borderRadius: 8,
        padding: 16,
        maxWidth: 300,
        margin: "0 auto",
        backgroundColor: "#fff",
        textAlign: "center",
        transition: "all 0.2s ease",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ marginBottom: "8px" }}>Cozy Lounge Chair</h2>
      <CustomButton />
    </div>
  );
};

export default LayoutMobile;
