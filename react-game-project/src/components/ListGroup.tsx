import { Fragment } from "react";

let items = ["Mumbai", "Kolkata", "New York", "Tokyo", "Los Angeles"];
// items = [];

const emptyList = () => {
  return items.length === 0 && <p>No item found!</p>;
};

const ListGroup = () => {
  return (
    <Fragment>
      <h1>List</h1>
      {emptyList()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ListGroup;
