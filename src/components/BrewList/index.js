import React, { Component } from "react";
import dateFormat from "dateformat";

const formatBrewDose = brew => {
  if (!brew.dose) return "";
  let s = brew.dose + "g -- ";
  if (brew.extractionTime) {
    s += `(${brew.extractionTime}s)`;
  }
  if (brew.yield) {
    s += ` --> ${brew.yield}g`;
  }
  return s;
};

export default function BrewList(props) {
  return (
    <div>
      {props.brews.map(brew => (
        <div className="card mt-3" key={brew.date}>
          <div className="card-body">
            <small>{dateFormat(brew.date, "dddd, mmmm dS, yyyy, H:MM")}</small>
            <br />
            {brew.coffeeName} ({brew.type})
            <br />
            {formatBrewDose(brew)}
            <br />
            {brew.grindSize && `Grind size: ${brew.grindSize}`}
          </div>
        </div>
      ))}
    </div>
  );
}
