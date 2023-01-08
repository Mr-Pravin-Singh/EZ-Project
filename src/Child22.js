// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsFilePlusFill,
  BsFillCaretUpFill,
  BsFillCheckSquareFill,
  BsFillCloudDownloadFill,
  BsFillCaretDownFill,
  BsFillEyeFill
} from "react-icons/bs";
// import { BiEdit } from "react-icons/bs";
// import { FaEdit } from "react-icons/bs";

export function Child22() {
  return (
    <div className="child22">
      <div className="sub2-part1">
        <div>
          <p>
            {" "}
            <span className=" left icon-content">4 Entites </span>
          </p>
        </div>

        <div className="inner-part">
          <BsFilePlusFill className="left text-blue" />
        </div>
        <div className="inner-part content33">
          <div className="padd">Billing Location</div>
          <div className="padd">Entity Location</div>
          <div className="padd">Entity Code</div>
          <div className="padd">MSLA valid through</div>
          <div className="padd">File Sharing </div>
        </div>
      </div>
      <div className="sub-chlid">
        {/* <div className="inner-part content3">
          <div className="padd">Riyadh, Kingdom of Saudi Arabia</div>
          <div className="padd">Lucus film Private Limited</div>
          <div className="padd">LUCKF0I</div>
          <div className="padd">3June 2022-5 June 2030</div>
          <div className="padd">External</div>
        </div> */}
        <div className="inner-part6 half-roate content1">
          <div className="padd1">Riyadh, Kingdom of Saudi Arabia</div>
          <div className="padd11">Lucus film Private Limited</div>
          <div className="padd1">LUCKF0I</div>
          <div className="padd1">3June 2022-5 June 2030</div>
          <div className="padd1">External</div>
          <div className="padd1">
            {/* <FaSortUp/> */}
            <BsFillCaretUpFill className="left2" />
          </div>
        </div>
        <div className="inner-part3 ">
          <div className="data-flow">
            <p className="content3">Address</p>
            <p className="cont">
              Address <br />
              Line 1 <br />
              Line 1<br />
              City, Country <br /> ZIP Code
            </p>
          </div>

          <div className="data-flow">
            <p className="content3">Company Registration Number</p>
            <p className="cont">
              Company Registration validity <br />
              5 June 2025
              <br />
              <br />
              Duration of file Stroage
              <br />
              90 days
              <br />
            </p>
          </div>
          <div className="data-flow">
            <p className="content3">TAX Registration Number</p>{" "}
            <p className="cont">
              AHR37T983Q7TRG8F <br />
              TRN validity
              <br />
              <br />
              5 June 2025
              <br />
              Currency US Dollor
              <br />
            </p>
          </div>
          <div className="data-flow">
            {" "}
            <BsFillCheckSquareFill className="blue" />
          </div>
          <div className="twopart">
            <div>
              <p className="content31">
                MSLA
                <br />
                className="content3">20200916 EZ Lucus film
                <BsFillEyeFill className="blue big " />
                <BsFillCloudDownloadFill className="blue big" />
                <br />
                Corporate prices as per MSLA
              </p>
            </div>
            <div>
              <p className="content22">
                WHT+FAT <br />
                5% + 5%
              </p>
            </div>
          </div>
        </div>

        <div className="inner-part4 content33 boundry">
          <div className="content2 padd">Service</div>
          <div className="content2 padd">Units</div>
          <div className="content2 padd">List Price</div>
          <div className="content2 padd">Offered Price</div>
          <div className="content2 padd">Disconts </div>
        </div>
        <div className="inner-part4 content33 boundry">
          <div className="content2 padd">
            Arbic Language Translation : EZ Assured
          </div>
          <div className="content2 padd">Words</div>
          <div className="content2 padd">0.1AED</div>
          <div className="content2 padd">0.09AED</div>
          <div className="content2 padd">10% (19 %) </div>
        </div>
        <div className="inner-part4 content33 boundry">
          <div className="content2 padd">
            Arbic Language Translation : EZ Assured
          </div>
          <div className="content2 padd">Words</div>
          <div className="content2 padd">0.1AED</div>
          <div className="content2 padd">0.09AED</div>
          <div className="content2 padd">10% (19 %) </div>
        </div>
        <div className="inner-part4 content33 boundry">
          <div className="content2 padd">
            Arbic Language Translation : EZ Assured
          </div>
          <div className="content2 padd">Words</div>
          <div className="content2 padd">0.1AED</div>
          <div className="content2 padd">0.09AED</div>
          <div className="content2 padd">10% (19 %) </div>
        </div>
        <div className="inner-part6 content1 boundry2">
          <div className="padd1">Riyadh, Kingdom of Saudi Arabia</div>
          <div className="padd11">Lucus Animaiton</div>
          <div className="padd1">DRAFT</div>
          <div className="padd1">DRAFT</div>
          <div className="padd1">External</div>
          <div className="padd1">
            <BsFillCaretDownFill className="left2" />{" "}
          </div>
        </div>
        <div className="inner-part6 content1 boundry3">
          <div className="padd1">Riyadh, Kingdom of Saudi Arabia</div>
          <div className="padd11">Star Wars Production</div>
          <div className="padd1">LUCKF02</div>
          <div className="padd1">3 June 2022-5 June 2030</div>
          <div className="padd1">None</div>
          <div className="padd1">
            <BsFillCaretDownFill className="left2" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
