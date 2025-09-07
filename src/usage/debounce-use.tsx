import { useEffect, useState } from "react";

import useDebounce from "../hooks/use-debounce";
import "../css/debounce-use.css";
import Input from "../components/input";
import Paragraph from "../components/paragraph";
function DebounceUse() {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const { debounce } = useDebounce({
    fn: setDebouncedInput,
    wait: 2000,
    immediate: false,
  });
  useEffect(() => {
    debounce(input);
  }, [input]);

  return (
    <div className="debounce-use-wrapper">
      <Paragraph type="lg">{`Entered Input:->${input}`}</Paragraph>
      <Paragraph type="lg">{`Debounced Input:->${debouncedInput}`}</Paragraph>
      <Input
        placeholder="Enter some input "
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default DebounceUse;
