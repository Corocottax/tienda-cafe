import "./App.css";
import Cafe from "./components/Cafe/Cafe";
import { useCafe } from "./customHooks/useCafe";
import CafeNotFound from "./components/CafeNotFound/CafeNotFound";
import { useContext } from "react";
import { modeContext } from "./context/modeProvider";

function App() {
  const { filtrar, cafesFiltered } = useCafe();

  const { darkMode, setDarkMode } = useContext(modeContext);

  return (
    <div className={darkMode ? "main dark" : "main"}>
      <img
        src={darkMode ? "/assets/sol.png" : "/assets/luna.png"}
        className="mode"
        onClick={() => setDarkMode(!darkMode)}
      />
      <input
        onInput={(e) => filtrar(e.target.value)}
        placeholder="busca aquí tu café"
        className={darkMode ? "dark" : "light"}
      />
      <div className="cafes">
        {cafesFiltered.length > 0 ? (
          cafesFiltered.map((cafe) => {
            return <Cafe key={cafe.nombre} cafe={cafe} />;
          })
        ) : (
          <CafeNotFound />
        )}
      </div>
    </div>
  );
}

export default App;
