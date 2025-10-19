import "./App.css";
import { EditorProvider } from "./context/EditorContext";
import EditorPanel from "./components/EditorPanel";
import LayoutDesktop from "./components/LayoutDesktop";

function App() {
  return (
    <EditorProvider>
      <div className="app-container">
        <EditorPanel />
        <LayoutDesktop />  
      </div>
    </EditorProvider>
  );
}

export default App;
