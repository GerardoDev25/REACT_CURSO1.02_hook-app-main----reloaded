import React, { useCallback, useState } from "react";
import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";

export const Callbackhook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>Use CallBack hook</h1>
      <p>{counter}</p>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
