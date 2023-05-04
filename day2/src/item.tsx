import React from "react";
import "./item.css";

interface Itemprops {
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
  onClick: () => void;
  /**
   * just id of item
   */
  id: number;
  /**
   * handle when click delete button
   * @returns void
   */
  onDelete: (id:number) => void;
  /**
   * handle when update value
   * @returns void
   */
  onFix: (id:number) => void;
  /**
   * item display or none
   */
  visible:boolean;
}

export default function Item({
  check,
  value,
  onClick,
  id,
  onDelete,
  onFix,
  visible,
}: Itemprops) {


  return (
      <div className="todo-list" style={{display: visible ? "block" : "none"}}>
        <div className={check ? "todo-item active-todo" : "todo-item"}>
          <div className="todo-item-title">
            <input type="checkbox" checked={check} onClick={onClick} id={id} />
            <p>{value}</p>
          </div>
          <div className="option">
            <button className="btn btn-update" onClick={() => onFix(id)}>
              <img
                src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/pencil.svg"
                alt="icon"
              />
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(id)}>
              <img
                src="https://buihien0109.github.io/HTML5-Games/DOM-project/todo/img/remove.svg"
                alt="icon"
              />
            </button>
          </div>
        </div>
      </div>
  );
}

Item.displayName = "Item";
