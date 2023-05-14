import React, { forwardRef  } from "react";
import "./item.css";


interface ItemProps {
  /**
   * true if check is tick
   */
  check: boolean;
  /**
   * value of input
   */
  value: string;
  /**
   * handle when click on input make check false or true
   * @returns void
   */
  onChange: (target: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * just id of item
   */
  some: number;
  /**
   * handle when click delete button
   * @returns void
   */
  onDelete: (some: number) => void;
  /**
   * handle when update value
   * @returns void
   */
  onFix: (some: number) => void;
  /**
   * item display or none
   */
  visible: boolean;
}

function Item(props: ItemProps, ref: React.LegacyRef<HTMLInputElement>) {
  const { check, value, onChange, some, onDelete, onFix, visible } = props;


  return (
    <div className="todo-list" style={{ display: visible ? "block" : "none" }}>
      <div className={check ? "todo-item active-todo" : "todo-item"}>
        <div className="todo-item-title">
          <input
            type="checkbox"
            checked={check}
            onChange={onChange}
            id={some.toString()}
            ref={ref}
          />
          <p>{value}</p>
        </div>
        <div className="option">
          <button className="btn btn-update" onClick={() => onFix(some)}>
            <img
              src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg"
              alt="icon"
            />
          </button>
          <button className="btn btn-delete" onClick={() => onDelete(some)}>
            <img
              src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg"
              alt="icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

 export default forwardRef (Item)

