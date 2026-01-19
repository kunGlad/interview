import { useState } from "react";

export default function Counter() {
  const [age, setAge] = useState(42);

  const increment = () => {
    setAge(age + 1);
  };

  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
    </>
  );
}
