import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";

const ImageGallery = () => {
  const { settings } = useContext(EditorContext);

  // Convert alignment option into flexbox justification
  const alignStyle = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  }[settings.gallery.align];

  // Temporary placeholder "images" (colored blocks)
  const colors = [
    "#8B5E3C",
    "#C77D3E",
    "#4C5C68",
    "#697A8C",
    "#3E6259",
    "#D13F3F",
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: alignStyle,
        flexWrap: "wrap",
        gap: settings.gallery.spacing,
        padding: 10,
      }}
    >
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: 60,
            height: 60,
            backgroundColor: color,
            borderRadius: settings.gallery.borderRadius,
            transition: "all 0.2s ease",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ImageGallery;
