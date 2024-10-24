import { Fragment, useState } from "react";
// import { MouseEvent } from "react";


// const emptyList = () => {
//   return items.length === 0 && <p>No item found!</p>;
// };

// Event Handler
// const handleClick = (event: MouseEvent) => alert("Clicked " + event.clientX);

const ListGroup = () => {
    let items = ["Mumbai", "Kolkata", "New York", "Tokyo", "Los Angeles"];
    // Hook
    const[selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>List</h1>
      {/* {emptyList()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ListGroup;
