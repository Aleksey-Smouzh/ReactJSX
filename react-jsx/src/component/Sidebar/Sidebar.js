import React from 'react'
import './Sidebar.css'
import Res from '../data/res.json'
export default function Sidebar() {
  return (
    <div className="Sidebar-container-sidebar">
      <nav>
        <ul>
          {Res.map((item) => (
            <li>
              {" "}
              <a href={item.price}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
