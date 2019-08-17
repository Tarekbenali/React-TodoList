import React from "react";
import "./Todoitem.css";

// Stateless Components
const Todoitem = (props) => {
  const { items, deleteItem } = props;
  const listitems = items.map(item => {
    return (
      <div key={item.id}>
        <span>{item.name}</span>
        <span>{item.age}</span>
        <span onClick={() => deleteItem(item.id)}>&times;</span>
      </div>
    );
  });
  return (
  <div>
  {listitems}
  </div>
  )
};

export default Todoitem;
