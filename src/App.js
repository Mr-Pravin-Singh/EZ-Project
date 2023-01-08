import "./styles.css";
import App2 from "./App2";
import App3 from "./App3";
import App1 from "./App1";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="home">
        <App1 />
        <App2 />
        <App3 />
      </div>
    </div>
  );
}
