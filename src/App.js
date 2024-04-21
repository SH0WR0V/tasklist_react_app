import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Tasklist } from "./components/Tasklist";
import { Counter } from "./components/Counter";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Counter />
        <Tasklist />
      </main>
      <Footer />
    </div>
  );
};
export default App;
