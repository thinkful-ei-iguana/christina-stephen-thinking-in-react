import React from 'react';
import Option from './Option';

export default function Feature(props) {
  const options = props.options.map(item => {
    return (
      <Option
        feature={props.feature}
        item={item}
        checked={item.name === props.toBeChecked}
        updateFeature={props.updateFeature}/>
    );
  });
  return (
    <fieldset className="feature" key={props.featureHash}>
      <legend className="feature__name">
        <h3>{props.feature}</h3>
      </legend>
      {options}
    </fieldset>
  );
}