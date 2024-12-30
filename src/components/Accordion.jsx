import React, {useState} from "react";
import "./Accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ id, question, answer }) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div className="accordion" onClick={toggle}>
      <div className="item">
        <p className="number">{id}</p>
        <p className="text">{question}</p>
              <FontAwesomeIcon icon={faChevronDown} className={`icon ${isVisible ? 'rotate' : ''}`} />
              <div className={`hidden-box ${isVisible ? 'active-box' : ''}`}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
