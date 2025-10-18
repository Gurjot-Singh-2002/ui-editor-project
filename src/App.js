import "./App.css";
import { EditorProvider } from "./context/EditorContext";
import EditorPanel from "./components/EditorPanel";
import LivePreview from "./components/LivePreview";

function App() {
  return (
    <EditorProvider>
      <div className="app-container">
        <EditorPanel />
        <LivePreview />
      </div>
    </EditorProvider>
  );
}

export default App;
