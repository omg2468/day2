import React from "react";
import { forwardRef, useRef } from 'react';


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
  onChange: (target: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * text of button
   */
  text: string;
}

 function Todoinput(
   props: Todoinputprops,
   ref: React.LegacyRef<HTMLInputElement>
 ) {
   const { onClick, value, onChange, text } = props;

   return (
     <div>
       <div className="todo-input">
         <input
           type="text"
           placeholder="Nhập công việc"
           id="todo-input"
           value={value}
           onChange={onChange}
           ref={ref}
         />
         <button id="btn-add" onClick={onClick}>
           {text}
         </button>
       </div>
     </div>
   );
 }

export default forwardRef(Todoinput);