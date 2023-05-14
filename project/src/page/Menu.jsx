import React from 'react'
import "./menu.css"
import Menucenter from './Menucomponent/Menucenter';
import Menuright from './Menucomponent/Menuright';


export default function Menu() {
  return (
    <div className="container menu">
      <h2 clas="">Thực đơn</h2>
      <div className="row">
    <Menuright/>
    <Menucenter/>
      </div>
    </div>
  );
}
