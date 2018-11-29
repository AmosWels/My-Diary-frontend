import React, { Component ,Fragment} from "react";
import { Routes } from "./routes/routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store/";
import "react-toastify/dist/ReactToastify.min.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <ToastContainer />
          <Routes/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
