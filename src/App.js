import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Tasklist } from "./components/Tasklist";
import { useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <Header />
      <h1 className="active">Hello, This is S. M. Shahriar</h1>
      <div className="App">
        <div className="box">
          <p>{count}</p>
          <button onClick={handleAdd} className="add">
            ADD
          </button>
          <button onClick={handleSub} className="sub">
            SUB
          </button>
          <button onClick={handleReset} className="reset">
            RESET
          </button>
        </div>
      </div>
      <Tasklist />
      <Footer />
    </div>
  );
};
export default App;
