import { useState } from "react";

const Display = () => {
  const [minute, setMinute] = useState(0);
  const [started, setStarted] = useState(false);
  const [second, setSecond] = useState(0);

  useState(() => {
    let timer;
    if (started) {
      console.log("Started inside if");
      timer = setInterval(() => {
        if (second < 59) {
          setSecond(second + 1);
        } else {
          setMinute(minute + 1);
          setSecond(0);
        }
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [second, started]);
  console.log(started);
  return (
    <>
      <h1>Stopwatch</h1>
      <div>
        Time: {minute}:{second}
      </div>
      {started ? (
        <button onClick={() => setStarted(false)}>Stop</button>
      ) : (
        <button onClick={() => setStarted(true)}>Start</button>
      )}
      <button
        onClick={() => {
          setStarted(false);
          setSecond(0);
          setMinute(0);
        }}
      >
        Reset
      </button>
    </>
  );
};
export default Display;
