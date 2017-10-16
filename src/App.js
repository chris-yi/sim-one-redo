import React, { Component } from 'react';
import Home from "./components/Home/Home";
import router from "./router"

class App extends Component {
  render() {
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

export default App;
