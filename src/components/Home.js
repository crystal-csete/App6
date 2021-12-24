/** @format */

import React from "react";
import FeatureOne from "./FeatureOne";
import TodoList from "./TodoList";

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
