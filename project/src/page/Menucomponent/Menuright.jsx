import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Formcake from "./Formcake";
import Formdiscount from "./Formdiscount";

export default function Menuright() {
  return (
    <div className="col-lg-3 position-relative">
      <div className="menu_right position-sticky">
        <div className="filter_icon d-flex align-items-center justify-content-between">
          <div className="header_filter">
            <i className="bi bi-funnel-fill" style={{ color: "red" }} />{" "}
            <span>Bộ lọc</span>
            <i className="bi bi-chevron-down" />
          </div>
          <Button className="btn btn-danger" disabled>
            Bỏ lọc
          </Button>
        </div>
        <Accordion defaultActiveKey={["0", "1"]} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Loại bánh</Accordion.Header>
            <Accordion.Body id="sort">
              <Formcake />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Khuyến mại</Accordion.Header>
            <Accordion.Body>
              <Formdiscount />
            </Accordion.Body>
          </Accordion.Item>
          <div className="filter_button text-center">
            <Button className="btn btn-danger" disabled>
              Áp dụng
            </Button>
          </div>
        </Accordion>
      </div>
    </div>
  );
}
