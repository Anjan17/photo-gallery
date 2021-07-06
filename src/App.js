import "./App.css";
import { NavmenuProvider } from "./components";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <main className="App">
      <NavmenuProvider>
        <div id="container">
          <HomePage />
        </div>
      </NavmenuProvider>
    </main>
  );
}

export default App;
