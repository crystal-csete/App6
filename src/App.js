/** @format */

import "./App.css";
import Nav from "./Nav";
import FeatureOne from "./FeatureOne";
import TodoList from "./components/TodoList";
import Inventory from "./components/Inventory";
import Supplies from "./components/Supplies";

function App() {
  return (
    <div className='appContainer'>
      <Nav />
      <header className='appHeader'>
        <h1>
          It's time to take notes for later!
          <i className='fas fa-clock fa-lg'></i>{" "}
        </h1>
      </header>
      <section>
        <FeatureOne />
      </section>

      <section>
        <TodoList />
      </section>

      <section>
        <Inventory />
      </section>

      <section>
        <Supplies />
      </section>
    </div>
  );
}

export default App;
