// Import necessary dependencies from React library
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Define Location component
const Location = () => {
  // Use the useContext hook to access 'dispatch' from AppContext
  const { dispatch } = useContext(AppContext);

  // Function to handle changing the location
  const changeLocation = (val) => {
    // Dispatch an action to update the location in the state
    dispatch({
      type: "CHG_LOCATION",
      payload: val,
    });
  };

  // Render the component with a dropdown to select the location
  return (
    <div className="alert alert-secondary">
      Location{" "}
      {
        // Render a select dropdown with options to choose a location
        <select
          name="Location"
          id="Location"
          onChange={(event) => changeLocation(event.target.value)}
        >
          <option value="£">Uk(£)</option>
          <option value="₹">India(₹)</option>
          <option value="€">Europe(€)</option>
          <option value="CAD">Canada(CAD)</option>
        </select>
      }
    </div>
  );
};

// Export Location component as the default export
export default Location;
