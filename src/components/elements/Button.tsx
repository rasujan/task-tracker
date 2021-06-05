import classNames from "classnames";
import React from "react";

interface props {
  color?: string;
  label: string;
  action: () => void;
}

const Button = ({ color, label, action }: props) => {
  return (
    <button
      className={classNames(
        "flex h-10 m-1 p-2 border rounded-md bg-black text-white align-middle",
        {
          "bg-red-400": color === "red",
          "bg-blue-400": color === "blue",
          "bg-yellow-400": color === "yellow",
          "bg-green-400": color === "green",
          "bg-black": color === "black",
        }
      )}
      onClick={action}
    >
      {label}
    </button>
  );
};

export default Button;
