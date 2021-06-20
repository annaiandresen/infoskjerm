import React, { useEffect, useState } from "react";
import createEnturService from "@entur/sdk";

const service = createEnturService({
  clientName: "annaandresen-infoskjerm",
});

const Bikes = () => {
  const [bikeStations, setBikeStations] = useState([]); //[] ettersom det er flere stasjoner

  useEffect(() => {
    service
      .getBikeRentalStationsByPosition(
        {
          latitude: 63.432703,
          longitude: 10.416317,
        },
        300
      )
      .then((data) => setBikeStations(data));
  }, []);

  return (
    <div className="Bikes">
      <h2>Bysykkelstasjoner</h2>
      {bikeStations.map((station) => (
        <Station key={station.id} station={station} />
      ))}
    </div>
  );
};

export default Bikes;

const Station = (props) => {
  const { name, bikesAvailable, spacesAvailable } = props.station;
  console.log(name, bikesAvailable, spacesAvailable);

  return (
    <div className="station">
      <h3>{name}</h3>
      Sykler: {bikesAvailable} - Ledig plass: {spacesAvailable}
    </div>
  );
};
