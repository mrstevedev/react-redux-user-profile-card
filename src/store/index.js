// Create Redux Store

import { createStore } from "redux";
import reducer from "../reducers";

// Set Initial State Object
const initialState = {
  aboutOne: "I am <strong>a Front-End developer, Record collector & Martial Artist</strong>",
  aboutTwo: "I like <strong>music, records & cake</strong>",
  name: 'Steven Pulido',
  location: 'San Diego, CA'
};

// Create Redux store from createStore
export const store = createStore(reducer, initialState);
