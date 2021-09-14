import React, { useState, useEffect } from "react";

import Thumbnail from "./Thumbnail";
const Home = () => {
  const [countries, setCountries] = useState([]);

  const [loading, setLoading] = useState(true);

  const getCountries = async () => {
    const response = await fetch(
      "https://restcountries.eu/rest/v2/region/asia"
    );
    const data = await response.json();

    setCountries(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  const refreshHandler = () => {
    window.location.reload(false);
  };

  return (
    <div className="bg-gray-500 text-white ">
      <div className="w-screen shadow-md py-6 px-3 bg-gray-700 text-white mb-16">
        <div className="flex container mx-auto">
          <h1 className="font-bold text-xl">Assignment</h1>
          <div className="ml-auto font-medium">
            <button onClick={() => refreshHandler()}>Refresh</button>
          </div>
        </div>
      </div>
      {/* //End of Navbar */}
      {loading ? (
        <span className="text-gray-300">Loading...</span>
      ) : (
        <div className="container grid grid-cols-4 gap-16 mx-auto mr-5">
          {countries.map((country, index) => (
            <Thumbnail
              title={country.name}
              flag={country.flag}
              region={country.region}
              subregion={country.subregion}
              population={country.population}
              borders={"" + country.borders}
              languages={
                "" + country.languages.map((language) => language.name)
              }
              key={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
