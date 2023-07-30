import "./App.css";
import BottomBar from "./components/BottomBar";
import PokeList from "./components/PokeList";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <PokeList />
      <BottomBar />
    </>
  );
}
export default App;
