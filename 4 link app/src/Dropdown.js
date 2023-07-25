import React, { useState } from "react";

export const Dropdown = () => {
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    // setCountry((country) => e.target.value);
    setCountry(e.target.value);
    console.log(country, countries[country]?.name);
  };
  let countries = [
    { name: "India", value: "in", cities: ["delhi", "mumbai", "banglore"] },
    {
      name: "pakistan",
      value: "pk",
      cities: ["lahore", "karachi", "islamabad"]
    },
    { name: "italy", value: "pk", cities: ["rome", "zecta", "fc-asr"] },
    { name: "france", value: "pk", cities: ["paris", "juve", "hose"] }
  ];
  return (
    <div>
      <select onChange={handleChange}>
        <option>Select country</option>
        {countries.map((country, i) => {
          return (
            <option value={i} key={i}>
              {country.name}
            </option>
          );
        })}
      </select>
      {/* ////////////////////////////////////////// */}
      <select
        style={{ marginLeft: "8px" }}
        onChange={(e) => {
          setCity(e.target.value);
          console.log(e.target.value);
        }}
        value={city}
      >
        {countries[country]?.cities?.map((city, i) => {
          return <option key={i}>{city}</option>;
        })}
      </select>
    </div>
  );
};
