import React from 'react';
import USCurrencyFormat from './currency';

export default function Summary(props) {
  return (
    <div className="summary__option" key={props.featureHash}>
      <div className="summary__option__label">{props.feature} </div>
      <div className="summary__option__value">{props.selectedOption.name}</div>
      <div className="summary__option__cost">
        {USCurrencyFormat.format(props.selectedOption.cost)}
      </div>
    </div>
  );
}