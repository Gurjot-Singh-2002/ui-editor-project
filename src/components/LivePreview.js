import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";
import ImageGallery from "./ImageGallery";
import "./LivePreview.css";

const LivePreview = () => {
  const { settings } = useContext(EditorContext);

  return (
 <div
  className="live-preview"
  style={{
    background: settings.layout.sectionBg,
    fontFamily: settings.typography.fontFamily,
    fontSize: settings.typography.fontSize,
    fontWeight: settings.typography.fontWeight,
    padding: settings.layout.containerPadding,
    transition: "all 0.3s ease",
  }}
>

      {settings.currentLayout === "desktop" ? (
        <LayoutDesktop />
      ) : (
        <LayoutMobile />
      )}
      <ImageGallery />
    </div>
  );
};

export default LivePreview;
