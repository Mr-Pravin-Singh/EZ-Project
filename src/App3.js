import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFillEmojiSunglassesFill,
  BsFillFileEarmarkPdfFill
} from "react-icons/bs";
import { MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Child22 } from "./Child22";
// import { Child } from "./App2";

export default function App3() {
  const [data, setData] = useState("INVICE CODE");
  const [data2, setData2] = useState("USERS");

  function overing() {
    setData("DETAILS");
  }
  function nothovering() {
    setData("USERS");
  }

  function overing2() {
    setData2("DETAILS");
  }
  function nothovering2() {
    setData2("INVICE CODE");
  }

  return (
    <div className="App3">
      <div className="subclass1">
        <div className="rightcontent">
          Hii Abhisek,{" "}
          <span className="inner-pic">
            {/* <img src="" alt="Girl in a jacket" width="10" height="10" />{" "} */}
            <BsFillEmojiSunglassesFill className="pic" />
          </span>
        </div>
      </div>
      <div className="subclass2">
        <div className="sub2-part1">
          <div>
            <p>
              {" "}
              <BsFillFileEarmarkPdfFill className="red-icon" />{" "}
              <span className="icon-content">Lucas Films Private limited </span>
            </p>
          </div>

          <div>
            <MDBBtn className="buton-right" color="info">
              Edit
            </MDBBtn>
          </div>
        </div>
        <div className="sub2-part2">
          <div className="sb2-p2-part1">
            <div className="content1 padd">
              Company Code <br /> LUCF
            </div>
            <div className="content1 padd">
              Company Logo <br /> Unavailabel
            </div>
          </div>

          <div className="content2">
            <p>
              Domains <br /> @lucasfilms.com <br /> @lucasstarwars.com <br />{" "}
              starwars.com
              <br />
              <span className="underline"> +5 Others</span>
            </p>
          </div>
        </div>
        <div className="sub2-part2"></div>
      </div>
      <div className="subclass3">
        <p className="content1 gapping">
          ENTITY{" "}
          <span
            className="gapping"
            onMouseEnter={overing2}
            onMouseLeave={nothovering2}
          >
            {data2}
          </span>{" "}
          <span
            className="gapping"
            onMouseEnter={overing}
            onMouseLeave={nothovering}
          >
            {data}
          </span>{" "}
        </p>
      </div>
      <div className="subclass4">
        <Child22 />
      </div>
    </div>
  );
}
