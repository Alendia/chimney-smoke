import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/home";
import Personal from "./pages/personal/personal";
import CurrentOrder from "./pages/currentOrder/currentOrder";
import HistoryOrder from "./pages/historyOrder/historyOrder";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Personal /> */}
      {/* <CurrentOrder /> */}
      {/* <HistoryOrder /> */}
    </div>
  );
}

export default App;
