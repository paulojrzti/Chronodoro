import "./styles";
import { Home } from "./layout";
import { Menu } from "./components";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center bg-bg w-screen px-10 relative">
        <div className="flex flex-col">
          <Home />
        </div>
        <Menu />
      </div>
    </>
  );
}

export default App;
