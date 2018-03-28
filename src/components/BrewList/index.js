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
        <div key={brew.date}>
          <small>{dateFormat(brew.date, "dddd, mmmm dS, yyyy, H:MM")}</small>
          <br />
          {brew.coffeeName} ({brew.type})
          <br />
          {formatBrewDose(brew)}
          <br />
          {brew.grindSize && `Grind size: ${brew.grindSize}`}
          <hr />
        </div>
      ))}
    </div>
  );
}
