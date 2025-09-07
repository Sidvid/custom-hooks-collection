import React, { useState } from "react";
import Paragraph from "../components/paragraph";
import usePrevious from "../hooks/use-previous";

function PreviousUse() {
  const [count, setCount] = useState(0);
  const { previous } = usePrevious(count);
  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <Paragraph type="sm">Current State : {count}</Paragraph>
      <Paragraph type="sm">Previous State: {previous}</Paragraph>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default PreviousUse;
