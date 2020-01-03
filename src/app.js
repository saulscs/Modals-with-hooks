import React from "react";
import { useModal } from "./hooks";
import "./styles.css";

const App = () => {
  const [toggle, show1, RenderModal] = useModal();
  const [toggle2, show2, RenderModal2] = useModal();

  return (
    <div className="App">
      <button onClick={show1}>Show Modal</button>

      <RenderModal>
        <p>Content of A</p>
      </RenderModal>

      <button onClick={show2}>Show Modal2 </button>

      <RenderModal2>
        <p>Content ofdssadsadsad A</p>
      </RenderModal2>
    </div>
  );
};

export default App;
