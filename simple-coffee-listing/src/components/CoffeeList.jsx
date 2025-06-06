import React, { useEffect, useState } from "react";
import Card from "./Cards.jsx";
import "./CoffeList.css";

const CoffeeList = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [availableOnly, setAvailableOnly] = useState(false);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setCoffeeData(data))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  const filteredData = availableOnly
    ? coffeeData.filter((coffee) => coffee.available)
    : coffeeData;

  return (
    <div className="coffee-list-container">
      <section className="hero">
      
      <div className="coffee-section">
        <h1>Our Collection</h1>
        <p className="description">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins.
        </p>

        <div className="filters">
          <button className="button" onClick={() => setAvailableOnly(false)}>
            All Products
          </button>
          <button className="button" onClick={() => setAvailableOnly(true)}>
            Available Now
          </button>
        </div>

        <div className="coffee-list">
          {filteredData.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
      
      </section>
    </div>
  );
};

export default CoffeeList;
