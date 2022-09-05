import React from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);
library.add(faLocationDot);


const Input = props => (
  <div className="form">
    <input
      className="input"
      placeholder="Type your location..."
      onChange={props.onChange}
      required
    />
    <button type="submit" className="btn" onClick={props.onClick} title="Search">
      <FontAwesomeIcon className="icon" size="lg" icon={faSearch} fixedWidth />
    </button>
    <p></p>
    <button type="button" className="btn" onClick={props.findLocation} title="Current Location">
      <FontAwesomeIcon className="icon" size="lg" icon={faLocationDot} fixedWidth />
    </button>
  </div>
);

export default Input;
