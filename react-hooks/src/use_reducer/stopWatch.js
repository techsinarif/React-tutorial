import { useReducer, useEffect } from "react";

const initialState = { // step 2
  isRunning: false,
  time: 0
};

export default function Stopwatch() {
  const [state, dispatch] = useReducer(reducer, initialState); // step 1

  useEffect(() => {
    let timer = 0;
    if (!state.isRunning) {
      return;
    }
    timer = setInterval(() => dispatch({ type: "tick" }), 1000);
    return () => {
      clearInterval(timer);
      timer = 0;
    };
  }, [state.isRunning]);

  return (
    <div className="stopwatch">
      {state.time}s
      <div>
        <button onClick={() => dispatch({ type: "start" })}>Start</button>
        <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

function reducer(state, action) { // step 3
  switch (action.type) {
    case "start":
      return { ...state, isRunning: true };
    case "stop":
      return { ...state, isRunning: false };
    case "reset":
      return { isRunning: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}