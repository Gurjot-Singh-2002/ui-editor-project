import { createContext, useState } from "react";

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    typography: {
      fontFamily: "Arial",
      fontSize: 16,
      fontWeight: 500,
    },
    button: {
      borderRadius: 8,
      bgColor: "#C75E4D",
      textColor: "#fff",
      shadow: "none",
      align: "left",
    },
    layout: {
      sectionBg: "#ffffff",
      containerPadding: 20,
    },
    gallery: {
      align: "center",
      spacing: 12,
      borderRadius: 10,
    },
    stroke: {
    color: "#000000",
    weight: 1,
    },
    currentLayout: "desktop",
  });

  return (
    <EditorContext.Provider value={{ settings, setSettings }}>
      {children}
    </EditorContext.Provider>
  );
};
