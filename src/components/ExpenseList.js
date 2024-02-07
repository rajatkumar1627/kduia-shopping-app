// Import necessary dependencies from React library
import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem"; // Import ExpenseItem component
import { AppContext } from "../context/AppContext"; // Import AppContext from context file

// Define ExpenseList component
const ExpenseList = () => {
  // Use the useContext hook to access the 'expenses' state from the AppContext
  const { expenses } = useContext(AppContext);

  // Render a table with expense details using the map function
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Items</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Items Price</th>
          <th scope="col">Remove</th>
        </tr>
      </thead>
      <tbody>
        {/* Map over the 'expenses' array and render an ExpenseItem for each expense */}
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            key={expense.id}
            name={expense.name}
            quantity={expense.quantity}
            unitprice={expense.unitprice}
          />
        ))}
      </tbody>
    </table>
  );
};

// Export ExpenseList component as the default export
export default ExpenseList;
