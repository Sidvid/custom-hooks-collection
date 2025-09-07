import React from "react";
import "../css/input.css";
interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
function Input(props: InputProps) {
  return <input {...props} type="text" className="input-beautiful " />;
}

export default Input;
