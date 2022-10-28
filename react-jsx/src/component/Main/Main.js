import React from "react";
import "./Main.css";
import Res from '../data/res.json'
export default function Main() {
    return (
      <div className="Main-site-main">
            {Res.map((item) => (
            
          <section>{item.title}</section>
        ))}
      </div>
    );
}
