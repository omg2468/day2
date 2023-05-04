import React from "react";

interface Todoinputprops {
  /**
   * add item to list or update item
   * @returns void
   */
  onClick: () => void;
  /**
   * two way binding the value
   */
  value: string;
  /**
   * update two way binding
   * @returns void
   */
  onChange: (target: string) => void;
  /**
   * text of button
   */
  text: string;
}

export default function Todoinput({
  onClick,
  value,
  onChange,
  text,
}: Todoinputprops) {
  return (
    <div>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Nhập công việc"
          id="todo-input"
          value={value}
          onChange={onChange}
        />
        <button id="btn-add" onClick={onClick}>
          {text}
        </button>
      </div>
    </div>
  );
}
