import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { ArrowRight } from 'react-bootstrap-icons';
import {
  BsFilePlusFill,
  BsSortDown,
  BsFillCaretDownFill
} from "react-icons/bs";
import { useState } from "react";
// import { Children } from "react";

export function Child(props) {
  const [val, setVal] = useState(0);

  function onClicked() {
    if (val === 0) {
      setVal(1);
    } else {
      setVal(0);
    }
  }

  function changeclass() {
    if (val === 0) {
      return "bluediv";
    } else {
      return "whitediv";
    }
  }

  return (
    <div>
      <div onClick={onClicked} className={changeclass()}>
        <p>
          <span className="content1"> {props.heading}</span>
          <span className="content2">{props.headleft}</span>
          <br />
          <span className="content3">{props.data}</span>
          <span className="content4">{props.dataleft}</span>
        </p>
      </div>
    </div>
  );
}

export default function App2() {
  const [val, setVal] = useState(0);

  function onClicked() {
    if (val === 0) {
      setVal(1);
    } else {
      setVal(0);
    }
  }

  function changeclass() {
    if (val === 0) {
      return "bluediv";
    } else {
      return "whitediv";
    }
  }

  return (
    <div className="App2">
      <div className="app2-top">
        <p>
          <span id="captial">Clients</span> <BsSortDown className="text-blue" />{" "}
          <span className="text-blue"> Creation Time</span>{" "}
          <BsFilePlusFill className="left text-blue" />
        </p>

        {/* <ArrowRight color="royalblue" size={96} /> */}

        <input
          type="search"
          className="search"
          name="search"
          placeholder="Comapny, Entity, User, Domain, Service, Location "
        />
        <div>
          <p className="small-size">
            April 2022
            <BsFillCaretDownFill className="left2" />
          </p>
        </div>
      </div>
      <div className="app2-below">
        <div onClick={onClicked} className={changeclass()}>
          <p>
            <span className="content1"> Mckinsey & Comapny</span>
            <span className="content22">MCKY</span>
            <br />
            <span className="content3">8 Entites</span>
            <span className="content44">MCKY</span>
          </p>
        </div>

        {/* <Child
          heading="Mckinsey & Comapny"
          headleft="MCKY"
          data="8 Entites"
          dataleft="MCKY"
        /> */}

        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
        <Child
          heading="Comapny Name"
          headleft="CODE"
          data="8 Entites"
          dataleft="64 Users"
        />
      </div>
    </div>
  );
}
