import React, { useEffect } from "react";
import {
  Col,
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Raating from "../UI/Rating";

import "../../styles/car-item.css";

const ContractItemCustomer = (props) => {
  let {
    Picture,
    P_Name,
    Price,
    feedback,
    Cname,
    Name,
    Rating,
    start_date,
    end_date,
  } = props.item;
  start_date = new Date(start_date);
  end_date = new Date(end_date);
  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <img src={Picture} alt="" className="w-100" height={"220rem"} />
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{P_Name}</h4>
          <h6 className="rent__price text-center mt-">
            Rs{Price}.00 <span>/ Day</span>
          </h6>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-user-3-fill"></i> {Cname}
            </span>

            <span className=" d-flex align-items-center gap-1">
              <i className="ri-shield-user-fill"></i> {Name}
            </span>
          </div>
          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-calendar-2-fill"></i> {start_date.toDateString()}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-calendar-check-fill"></i>
              {end_date.toDateString()}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ContractItemCustomer;
