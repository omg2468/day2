import React from 'react'

interface FilterProps {
  /**
   * handle when checkbox
   * @returns void
   */
  onChange: (label:string) => void;
  label: string;
  value: string;
  check:boolean;
}

export default function Filter({ onChange, label, value, check }: FilterProps) {
  return (
    <div className="todo-option-item">
      <input
        type="radio"
        name="todo-option-item"
        id={label}
        value="1"
        onChange={() => onChange(label)}
        checked={check}
      />
      <label htmlFor={label}>{value}</label>
    </div>
  );
}
