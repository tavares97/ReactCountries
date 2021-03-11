import React from "react";

const Country = ({
  country: [{ name, capital, flag, population, languages }],
}) => {
  return (
    <div className="row">
      <div className="card deep-orange lighten-4">
        <div className="card-image">
          <img src={flag} alt="flag" />
          <span className="card-title">{name}</span>
        </div>
        <div style={{ display: "flex" }}>
          <div className="card-content black-text">
            <p>
              <strong>Capital:</strong> {capital}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Languages:</strong>{" "}
              {languages.length > 0 &&
                languages.map((language) => <li>{language.name}</li>)}
            </p>
          </div>

          <div className="card-content black-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
