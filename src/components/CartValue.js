// Import React and useContext from React library
import React, { useContext } from "react";

// Import the AppContext from "../context/AppContext"
import { AppContext } from "../context/AppContext";

// Define a functional component named CartValue
const CartValue = () => {
  // Destructure expenses and Location from the context using useContext
  const { expenses, Location } = useContext(AppContext);

  // Calculate the totalExpenses by reducing the expenses array
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  // Render a div with a bootstrap alert style
  return (
    <div className="alert alert-primary">
      {/* Display Cart Value and Location along with totalExpenses */}
      <span>
        Cart Value:{Location}
        {totalExpenses}
      </span>
    </div>
  );
};

// Export the CartValue component as the default export
export default CartValue;
