// Import necessary dependencies from React library
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Import AppContext from context file
import { FaTimesCircle } from "react-icons/fa"; // Import FaTimesCircle icon from react-icons library

// Define ExpenseItem component
const ExpenseItem = (props) => {
  // Use the useContext hook to access 'dispatch' and 'Location' from AppContext
  const { dispatch, Location } = useContext(AppContext);

  // Function to handle deleting an item
  const handleDeleteItem = () => {
    // Create an item object with the name of the expense to be deleted
    const item = {
      name: props.name,
    };

    // Dispatch an action to delete the item from the state
    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  // Render a table row with expense details
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.quantity}</td>
      <td>
        {/* Display unit price with currency symbol from 'Location' context */}
        {Location}
        {parseInt(props.unitprice)}
      </td>
      <td>
        {/* Display total price with currency symbol from 'Location' context */}
        {Location}
        {parseInt(props.quantity) * parseInt(props.unitprice)}
      </td>
      <td>
        {/* Render a delete icon (FaTimesCircle) with event handler */}
        <FaTimesCircle
          size="2.2em"
          color="red"
          onClick={handleDeleteItem}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

// Export ExpenseItem component as the default export
export default ExpenseItem;
