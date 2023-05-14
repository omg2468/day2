import React from 'react'
import bank from "../../component/images/bank_transfer.png"
import mastercard from "../../component/images/master_card.png";
import COD from "../../component/images/COD.png";
import {Link} from "react-router-dom"

export default function Centercart() {
  return (
    <div className="container cart">
      <h2>Thanh toán</h2>
      <div className="row">
        <div className="col-lg-6 col-12">
          <div className="user_info">
            <h6>Thông Tin Khách hàng</h6>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Họ và tên"
              />
              <div className="form-message name" />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Số điện thoại"
              />
              <div className="form-message phone" />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Email"
              />
              <div className="form-message email" />
            </div>
            <div className="adress_customer">
              <select id="city" name="city" className="form-select">
                <option value="default" selected="">
                  Chọn tỉnh
                </option>
              </select>
              <select id="districts" name="districts" className="form-select">
                <option value="default">Chọn huyện</option>
              </select>
              <select name="wards" id="wards" className="form-select">
                <option value="default">Chọn xã</option>
              </select>
            </div>
            <textarea
              rows={3}
              placeholder="Ghi chú"
              className="form-control"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <h6>Phương thức thanh toán</h6>
          <div className="form-check">
            <div
              className="container-form"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Via Bank Transfer
              </label>
            </div>
            <img src={bank} alt="bank_transfer" height="40px" />
          </div>
          <div
            className="form-check"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          >
            <div className="container-form">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Transfer Money, Visa Card, Master Card
              </label>
            </div>
            <img src={mastercard} alt="bank_transfer" height="40px" />
          </div>
          <div className="form-check">
            <div className="container-form">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Cash On Delivery(COD)
              </label>
            </div>
            <img src={COD} alt="bank_transfer" height="40px" />
          </div>
          <div className="oder_done">
            <div className="back_button">
              <Link to="/cart">
                Quay lại giỏ hàng
              </Link>
            </div>
            <div className="btn btn-danger">Thanh toán ngay</div>
          </div>
        </div>
      </div>
    </div>
  );
}
