import Nav_bar from "./components/Nav_bar";
import { Home_Page } from "./pages/Home_Page";
import "./css/App.css";

function App() {
  return (
    <div className="body">
      <div className="navBar">
        <Nav_bar />
      </div>
      <Home_Page />
    </div>
  );
}

export default App;
