import { combineReducers } from "redux";
import countryReducer from "./countryReducer";

//REDUCER SETUP
export default combineReducers({
  travel: countryReducer,
});
