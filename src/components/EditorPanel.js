import { useContext } from "react";
import { EditorContext } from "../context/EditorContext";
import "./EditorPanel.css";

const EditorPanel = () => {
  const { settings, setSettings } = useContext(EditorContext);

  return (
    <div className="editor-panel">
      <h3>UI Editor</h3>

      {/* Typography Section */}
      <h4>Typography</h4>

      <label>Font Family:</label>
      <select
        value={settings.typography.fontFamily}
        onChange={(e) =>
          setSettings({
            ...settings,
            typography: { ...settings.typography, fontFamily: e.target.value },
          })
        }
      >
        <option value="Arial">Arial</option>
        <option value="Roboto">Roboto</option>
        <option value="Inter">Inter</option>
        <option value="Poppins">Poppins</option>
      </select>

      <label>Font Weight:</label>
      <select
        value={settings.typography.fontWeight}
        onChange={(e) =>
          setSettings({
            ...settings,
            typography: {
              ...settings.typography,
              fontWeight: parseInt(e.target.value),
            },
          })
        }
      >
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
      </select>

      <label>Font Size: {settings.typography.fontSize}px</label>
      <input
        type="range"
        min="10"
        max="60"
        value={settings.typography.fontSize}
        onChange={(e) =>
          setSettings({
            ...settings,
            typography: {
              ...settings.typography,
              fontSize: parseInt(e.target.value),
            },
          })
        }
      />

      {/* Button Section */}
      <h4>Button</h4>

      <label>Button Background:</label>
      <input
        type="color"
        value={settings.button.bgColor}
        onChange={(e) =>
          setSettings({
            ...settings,
            button: { ...settings.button, bgColor: e.target.value },
          })
        }
      />

      <label>Text Color:</label>
      <input
        type="color"
        value={settings.button.textColor}
        onChange={(e) =>
          setSettings({
            ...settings,
            button: { ...settings.button, textColor: e.target.value },
          })
        }
      />

      <label>Border Radius: {settings.button.borderRadius}px</label>
      <input
        type="range"
        min="0"
        max="50"
        value={settings.button.borderRadius}
        onChange={(e) =>
          setSettings({
            ...settings,
            button: {
              ...settings.button,
              borderRadius: parseInt(e.target.value),
            },
          })
        }
      />

      <label>Shadow:</label>
      <select
        value={settings.button.shadow}
        onChange={(e) =>
          setSettings({
            ...settings,
            button: { ...settings.button, shadow: e.target.value },
          })
        }
      >
        <option value="none">None</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label>Alignment:</label>
      <select
        value={settings.button.align}
        onChange={(e) =>
          setSettings({
            ...settings,
            button: { ...settings.button, align: e.target.value },
          })
        }
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>

      {/* Layout */}
      <h4>Layout</h4>
      <label>Background:</label>
      <input
        type="color"
        value={settings.layout.sectionBg}
        onChange={(e) =>
          setSettings({
            ...settings,
            layout: { ...settings.layout, sectionBg: e.target.value },
          })
        }
      />

      <label>Padding: {settings.layout.containerPadding}px</label>
      <input
        type="range"
        min="0"
        max="60"
        value={settings.layout.containerPadding}
        onChange={(e) =>
          setSettings({
            ...settings,
            layout: {
              ...settings.layout,
              containerPadding: parseInt(e.target.value),
            },
          })
        }
      />
      {/* Gallery / Images */}
<h4>Galleries / Images</h4>

<label>Gallery Alignment:</label>
<select
  value={settings.gallery.align}
  onChange={(e) =>
    setSettings({
      ...settings,
      gallery: { ...settings.gallery, align: e.target.value },
    })
  }
>
  <option value="left">Grid Left</option>
  <option value="center">Grid Center</option>
  <option value="right">Grid Right</option>
</select>

<label>Spacing: {settings.gallery.spacing}px</label>
<input
  type="range"
  min="0"
  max="50"
  value={settings.gallery.spacing}
  onChange={(e) =>
    setSettings({
      ...settings,
      gallery: {
        ...settings.gallery,
        spacing: parseInt(e.target.value),
      },
    })
  }
/>

<label>Border Radius: {settings.gallery.borderRadius}px</label>
<input
  type="range"
  min="0"
  max="30"
  value={settings.gallery.borderRadius}
  onChange={(e) =>
    setSettings({
      ...settings,
      gallery: {
        ...settings.gallery,
        borderRadius: parseInt(e.target.value),
      },
    })
  }
/>
{/* Stroke / Border */}
<h4>Stroke / Border</h4>

<label>Stroke Color:</label>
<input
  type="color"
  value={settings.stroke.color}
  onChange={(e) =>
    setSettings({
      ...settings,
      stroke: { ...settings.stroke, color: e.target.value },
    })
  }
/>

<label>Stroke Weight: {settings.stroke.weight}px</label>
<input
  type="range"
  min="0"
  max="10"
  value={settings.stroke.weight}
  onChange={(e) =>
    setSettings({
      ...settings,
      stroke: {
        ...settings.stroke,
        weight: parseInt(e.target.value),
      },
    })
  }
/>
{/* Layout Switching */}
<h4>Layout Switching</h4>
<label>Select Layout:</label>
<select
  value={settings.currentLayout}
  onChange={(e) =>
    setSettings({
      ...settings,
      currentLayout: e.target.value,
    })
  }
>
  <option value="desktop">Desktop Layout</option>
  <option value="mobile">Mobile Layout</option>
</select>
{/* Export Configuration */}
<h4>Export Settings</h4>
<button
  onClick={() => {
    const dataStr = JSON.stringify(settings, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ui_settings.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  style={{
    background: "#333",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  }}
>
  Export as JSON
</button>



    </div>
  );
};

export default EditorPanel;
