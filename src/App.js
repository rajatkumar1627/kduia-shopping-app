// Import necessary dependencies and styles
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import AppProvider from context to wrap the application
import { AppProvider } from "./context/AppContext";

// Import individual components used in the app
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";
import ItemSelected from "./components/ItemSelected";
import Location from "./components/Location";

// Define the main App component
const App = () => {
  return (
    // Wrap the entire application with AppProvider to provide state to components
    <AppProvider>
      {/* Main container for the application */}
      <div className="container">
        {/* Main heading of the application */}
        <h1 className="mt-3">Shopping App</h1>

        {/* Row for CartValue and Location components */}
        <div className="row mt-3">
          <div className="col-sm">
            {/* Render the CartValue component */}
            <CartValue />
          </div>
          <div className="col-sm">
            {/* Render the Location component */}
            <Location />
          </div>
        </div>

        {/* Heading for the Shopping Cart section */}
        <h3 className="mt-3">Shopping Cart</h3>

        {/* Row for the ExpenseList component */}
        <div className="row ">
          <div className="col-sm">
            {/* Render the ExpenseList component */}
            <ExpenseList />
          </div>
        </div>

        {/* Heading for the Add Items section */}
        <h3 className="mt-3">Add Items</h3>

        {/* Row for the ItemSelected component */}
        <div className="row mt-3">
          <div className="col-sm">
            {/* Render the ItemSelected component */}
            <ItemSelected />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

// Export the App component as the default export
export default App;
