//IMPORT THE TYPES
import {
  ERROR,
  GET_COUNTRIES,
  GET_REGIONS,
  GET_COUNTRY,
  GET_MULTIPLE,
  MULTIPLE_SELECTED,
} from "../actions/types";

//SET THE INITIAL APP STATE
const initialState = {
  regions: [
    { id: 1, region: "africa", name: "Africa" },
    { id: 2, region: "europe", name: "Europe" },
    { id: 3, region: "asia", name: "Asia" },
    { id: 4, region: "oceania", name: "Oceania" },
    { id: 5, region: "americas", name: "Americas" },
  ],
  countries: [],
  country: [],
  multiple: [],
  isSelected: false,
  error: null,
};

//THE REDUCER RECEIVES THE STATE AND AN ACTION AS ARGUMENTS
const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    //THIS IS WHERE WE SET THE STATE
    case GET_REGIONS:
      return {
        ...state,
        regions: state.regions,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case GET_MULTIPLE:
      return {
        ...state,
        multiple: [...state.multiple, action.payload],
      };
    case MULTIPLE_SELECTED:
      return {
        ...state,
        multiple: [state.country],
        isSelected: !state.isSelected,
      };

    case ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default countryReducer;
