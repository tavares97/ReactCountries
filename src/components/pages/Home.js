import React from "react";
import { connect } from "react-redux";
import {
  getRegions,
  getCountries,
  getCountry,
  isMultipleSelected,
} from "../../actions/countryActions";
import Country from "../country/Country";

const Home = ({
  travel: { regions, countries, country, multiple, isSelected },
  getCountries,
  getCountry,
  isMultipleSelected,
}) => {
  const onRegionChange = (e) => {
    const region = e.target.value;
    getCountries(region);
  };

  const onCountryChange = (e) => {
    const country = e.target.value;
    getCountry(country);
  };

  const onRadioChange = (e) => {
    isMultipleSelected();
  };

  return (
    <div>
      <div className="row">
        <div className="grid-example col s12 center">
          <h1 className="flow-text">Lets plan your next vacation !!</h1>
        </div>
        <h6>Lets first choose a region</h6>
        <select
          className="browser-default"
          defaultValue={"default"}
          onChange={onRegionChange}
        >
          <option value="default" disabled>
            Choose your option
          </option>
          {regions.map(({ region, id, name }) => (
            <option key={id} value={region}>
              {name}
            </option>
          ))}
        </select>

        {countries.length !== 0 && (
          <div style={{ marginTop: "0.8rem" }}>
            <h6>Great choice here's all the countries on that region</h6>
            <select
              className="browser-default"
              defaultValue={"default"}
              onChange={onCountryChange}
            >
              <option value="default" disabled>
                Choose your option
              </option>
              {countries.map(({ name, alpha2Code }) => (
                <option key={alpha2Code} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <h5 className="center">
              Do you want to select multiple countries ?
            </h5>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    value="true"
                    onChange={onRadioChange}
                  />
                  <span style={{ marginRight: "30px" }}>Yes</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    value="false"
                    defaultChecked={"false"}
                    onChange={onRadioChange}
                  />
                  <span>No</span>
                </label>
              </p>
            </div>
          </div>
        )}
        {isSelected === true
          ? multiple.map((country) => (
              <Country key={country.alpha2Code} country={country} />
            ))
          : country.length !== 0 && <Country country={country} />}
      </div>
    </div>
  );
};

//THIS IS USED TO SELECT THE PARTS YOU NEED FROM TO STORE TO GIVE TO THE COMPONENT
const mapStateToProps = (state) => ({
  //IN THIS CASE WE ONLY NEED THE 'log' STATE THAT IS PASSED IN THE 'index.js' OF THE REDUCERS
  travel: state.travel,
});

export default connect(mapStateToProps, {
  getRegions,
  getCountries,
  getCountry,
  isMultipleSelected,
})(Home);
