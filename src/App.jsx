import "./App.css";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </div>
  );
}

export default App;
