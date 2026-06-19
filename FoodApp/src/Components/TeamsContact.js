import { useRef, useState } from "react";

const TeamsContact = ({ name, contact, phone }) => {
  const [count, setCount] = useState(0);

  const intervalRefPos = useRef(null);
  const intervalRefNeg = useRef(null);

  return (
    <div className="teamsContact">
      <h1>Count: {count}</h1>

      <button
        onClick={() => {
          // stop decrease interval if running
          clearInterval(intervalRefNeg.current);
          intervalRefNeg.current = null;

          // prevent multiple intervals
          clearInterval(intervalRefPos.current);

          intervalRefPos.current = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 100);
        }}
      >
        Increase Count
      </button>

      <button
        onClick={() => {
          // stop both intervals
          clearInterval(intervalRefPos.current);
          clearInterval(intervalRefNeg.current);

          intervalRefPos.current = null;
          intervalRefNeg.current = null;
        }}
      >
        Stop Count
      </button>

      <button
        onClick={() => {
          // stop increase interval if running
          clearInterval(intervalRefPos.current);
          intervalRefPos.current = null;

          // prevent multiple intervals
          clearInterval(intervalRefNeg.current);

          intervalRefNeg.current = setInterval(() => {
            setCount((prev) => prev - 1);
          }, 100);
        }}
      >
        Decrease Count
      </button>

      <h1>Name: {name}</h1>
      <h2>Contact: {contact}</h2>
      <h2>Phone: {phone}</h2>
    </div>
  );
};

export default TeamsContact;