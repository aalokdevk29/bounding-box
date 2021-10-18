import { Provider } from "react-redux";
import "./App.css";
import Modal from "./components/modal";
import LandingPage from "./pages/landing";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Modal />
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
