//import axios from "axios";
import axios from "axios";
import {
  GET_REGIONS,
  ERROR,
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_MULTIPLE,
  MULTIPLE_SELECTED,
} from "./types";

//GETS LOGS FROM SERVER
export const getRegions = () => async (dispatch) => {
  try {
    dispatch({ type: GET_REGIONS });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const getCountries = (region) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/region/${region}`
    );

    dispatch({ type: GET_COUNTRIES, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const getCountry = (country) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${country}`
    );

    dispatch({ type: GET_COUNTRY, payload: res.data });
    dispatch({ type: GET_MULTIPLE, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error });
  }
};

export const isMultipleSelected = () => async (dispatch) => {
  dispatch({ type: MULTIPLE_SELECTED });
};
