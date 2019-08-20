import React from "react";
import "./Todoitem.scss";

// Stateless Components
const Todoitem = (props) => {
  const { items, deleteItem } = props;

  const listitems = items.length ? (
    items.map(item => {
      return (
        <div key={item.id}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
        </div>
      )
    })
  )
    : (
      <p>No More Items</p>
    )
  return (
    <div className="listitems">
    <div>
          <span className="name title">Name </span>
        <span className="age title">Age </span>
        <span className="action title">Action </span>
      </div>
      {listitems}
    </div>
  )
};

export default Todoitem;
