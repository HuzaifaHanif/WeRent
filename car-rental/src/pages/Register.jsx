import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import RegisterCustomer from "../components/Register/RegisterCustomer";
import RegisterSeller from "../components/Register/RegisterSeller";
function Register() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value, color) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "2rem" }}>
        <strong>Register</strong>
      </h1>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1", "#000d6b")}
              active={justifyActive === "tab1"}
            >
              Customer
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Seller
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <RegisterCustomer />
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <RegisterSeller />
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
}

export default Register;
