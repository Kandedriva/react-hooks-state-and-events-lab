import React, { useState } from "react";

function Item({ name, category }) {

  const [item, setItem] = useState(true);


  function handleClick(){    
    setItem(!item)
  }



  return (
    <li className={item? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{item? "Add to Cart " : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
