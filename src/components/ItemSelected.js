// Import necessary dependencies from React library
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

// Define ItemSelected component
const ItemSelected = (props) => {
  // Use the useContext hook to access 'dispatch' from AppContext
  const { dispatch } = useContext(AppContext);

  // Set up state variables using useState hook
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [action, setAction] = useState("");

  // Function to handle form submission
  const submitEvent = () => {
    // Create an item object with name and quantity from state
    const item = {
      name: name,
      quantity: parseInt(quantity),
    };

    // Dispatch an action based on the selected action ("Add" or "Reduce")
    if (action === "Reduce") {
      dispatch({
        type: "RED_QUANTITY",
        payload: item,
      });
    } else {
      dispatch({
        type: "ADD_QUANTITY",
        payload: item,
      });
    }
  };

  // Render the component with form elements
  return (
    <div>
      <div className="row">
        {/* Form elements for selecting item, action, and entering quantity */}
        <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Items
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            onChange={(event) => setName(event.target.value)}
          >
            <option defaultValue>Choose...</option>
            <option value="Shirt" name="Shirt">
              Shirt
            </option>
            <option value="Dress" name="Dress">
              Dress
            </option>
            <option value="Jeans" name="Jeans">
              Jeans
            </option>
            <option value="Dinner set" name="Dinner set">
              Dinner set
            </option>
            <option value="Bags" name="Bags">
              Bags
            </option>
          </select>

          <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
            <label className="input-group-text" htmlFor="inputGroupSelect02">
              Quantity
            </label>
          </div>
          <select
            className="custom-select"
            id="inputGroupSelect02"
            onChange={(event) => setAction(event.target.value)}
          >
            <option defaultValue value="Add" name="Add">
              Add
            </option>
            <option value="Reduce" name="Reduce">
              Reduce
            </option>
          </select>

          <span
            className="eco"
            style={{ marginLeft: "2rem", marginRight: "8px" }}
          ></span>

          {/* Input field for entering quantity */}
          <input
            required="required"
            type="number"
            id="cost"
            value={quantity}
            style={{ size: 10 }}
            onChange={(event) => setQuantity(event.target.value)}
          ></input>

          {/* Button to submit the form */}
          <button
            className="btn btn-primary"
            onClick={submitEvent}
            style={{ marginLeft: "2rem" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Export ItemSelected component as the default export
export default ItemSelected;
