// Import necessary dependencies from React library
import React, { createContext, useReducer } from "react";

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
  // Create a new array to store updated expenses
  let new_expenses = [];

  // Switch statement to handle different action types
  switch (action.type) {
    case "ADD_QUANTITY":
      // Handle the case when quantity is added to an existing item
      let updatedqty = false;
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = expense.quantity + action.payload.quantity;
          updatedqty = true;
        }
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };

    // Similar cases for reducing quantity, deleting an item, and changing location
    case "RED_QUANTITY":
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = expense.quantity - action.payload.quantity;
        }
        expense.quantity = expense.quantity < 0 ? 0 : expense.quantity;
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };

    case "DELETE_ITEM":
      state.expenses.map((expense) => {
        if (expense.name === action.payload.name) {
          expense.quantity = 0;
        }
        new_expenses.push(expense);
        return true;
      });
      state.expenses = new_expenses;
      action.type = "DONE";
      return {
        ...state,
      };
    case "CHG_LOCATION":
      action.type = "DONE";
      state.Location = action.payload;
      return {
        ...state,
      };

    default:
      return state;
  }
};

// 1. Sets the initial state when the app loads
const initialState = {
  expenses: [
    // Initial list of expenses with default values
    { id: "Shirt", name: "Shirt", quantity: 0, unitprice: 500 },
    { id: "Jeans", name: "Jeans", quantity: 0, unitprice: 1000 },
    { id: "Dress", name: "Dress", quantity: 0, unitprice: 1500 },
    { id: "Dinner set", name: "Dinner set", quantity: 0, unitprice: 1000 },
    { id: "Bags", name: "Bags", quantity: 0, unitprice: 200 },
  ],
  Location: "£", // Initial location value
};

// 2. Creates the context - this is the thing our components will import and use to get the state and the dispatch
export const AppContext = createContext();

// 3. This is the provider that will wrap our app and give us access to the state and the dispatch
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
  // 4. Sets up the app state, takes a reducer, and an initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Calculate the total expenses based on the state
  const totalExpenses = state.expenses.reduce((total, item) => {
    return (total = total + item.unitprice * item.quantity);
  }, 0);

  // Assign the calculated CartValue to the state
  state.CartValue = totalExpenses;

  // Return the AppContext.Provider with the necessary values
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        CartValue: state.CartValue,
        dispatch,
        Location: state.Location,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
