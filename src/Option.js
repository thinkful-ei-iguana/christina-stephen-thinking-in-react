import React from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './currency';

export default function Option(props) {
  const itemHash = slugify(JSON.stringify(props.item));

  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(props.feature)}
        checked={props.checked}
        onChange={e => props.updateFeature(props.feature, props.item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {props.item.name} ({USCurrencyFormat.format(props.item.cost)})
            </label>
    </div>
  )
}