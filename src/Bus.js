import React, { useState, useEffect } from "react";
import EnturService from "@entur/sdk";
import { DateTime } from "luxon";

const service = new EnturService({ clientName: 'annaandresen-infoskjerm'});

const Bus = (props) => {
    const [departures, setDepartures] = useState([]);
    const [departuresFromCenter, setDeparturesFromCenter] = useState([]);
    const [departuresToCenter, setDeparturesToCenter] = useState([]);
    const { refresh } = props;
  
    const id = "NSR:StopPlace:43577";
  
    const fromCenter = "NSR:Quay:74793";
    const toCenter = "NSR:Quay:74792";
  
    const size = 6;
  
    useEffect(() => {
      service.getDeparturesFromStopPlace(id).then((data) => setDepartures(data));
    }, [refresh]);
  
    useEffect(() => {
      setDeparturesFromCenter(departures.filter((d) => d.quay.id === fromCenter));
      setDeparturesToCenter(departures.filter((d) => d.quay.id === toCenter));
    }, [departures]);
  
    return (
      <div className="busses">
        <div className="from">
          <h2>Bakkegata - Fra Sentrum</h2>
          {departuresFromCenter.slice(0, size).map((departure) => (
            <Departure key={departure.serviceJourney.id} departure={departure} />
          ))}
        </div>
        <div className="towards">
          <h2>Bakkegata - Mot Sentrum</h2>
          {departuresToCenter.slice(0, size).map((departure) => (
            <Departure key={departure.serviceJourney.id} departure={departure} />
          ))}
        </div>
      </div>
    );
  };
  
  const Departure = (props) => {
    const { departure } = props;
    const { expectedDepartureTime, serviceJourney } = departure;
    const departureTime = DateTime.fromISO(expectedDepartureTime);
    return (
      <div className="departure">
        <h5>#{serviceJourney.journeyPattern.line.publicCode}</h5>Avgang: {departureTime.toLocaleString(DateTime.TIME_24_SIMPLE)}
      </div>
    );
  };

export default Bus;