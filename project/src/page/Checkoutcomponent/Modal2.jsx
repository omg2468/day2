import React from 'react'
import chip from "../../component/images/chip.png";
import visa from "../../component/images/visa.png";
import map from "../../component/images/map.png";
import pattern from "../../component/images/pattern.png";

export default function Modal2() {
  return (
    <div
      className="modal fade bank"
      id="exampleModal1"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Transfer Money, Visa Card, Master Card
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="card_visa d-none d-md-block">
              <div className="card_inner">
                <div className="front_visa">
                  <div className="header_visa_front">
                    <img
                      src={chip}
                      alt="chip"
                      width="60px"
                      className="chip_img"
                    />
                    <img
                      src={visa}
                      alt="visa"
                      width="60px"
                      className="visa_img"
                    />
                  </div>
                  <div className="number_visa">
                    <div className="section_one">0000</div>
                    <div className="section_two">0000</div>
                    <div className="section_three">0000</div>
                    <div className="section_four">0000</div>
                  </div>
                  <div className="footer_visa_front">
                    <div className="card_name">
                      <div>CARD HOLDER</div>
                      <div className="name_change" />
                    </div>
                    <div className="card_valid">
                      <div>VALID TILL</div>
                      <div className="time_change" />
                    </div>
                  </div>
                  <div className="background">
                    <img src={map} alt="map" height="290px" width="470px" />
                  </div>
                </div>
                <div className="back_visa">
                  <div className="header_back_visa" />
                  <div className="secret_number">
                    <img
                      src={pattern}
                      alt="pattern"
                      height="50px"
                      width="400px"
                    />
                    <div className="visa_secret_number">
                      <p />
                    </div>
                  </div>
                  <div className="article_back_visa">
                    this is information of visa
                  </div>
                  <div className="footer_back_visa">
                    <div className="signature">customer signature</div>
                    <img src={visa} width="80px" alt="visa" />
                  </div>
                  <div className="background">
                    <img
                      src={map}
                      alt="map"
                      height="290px"
                      width="470px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="number-visa"
                placeholder="Số thẻ tín dụng/ghi nợ"
              />
              <div className="form-message number-visa" />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name_visa"
                placeholder="Họ và tên chủ thẻ"
              />
              <div className="form-message name_visa" />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="expiry"
                placeholder="Ngày hết hạn"
                maxLength={5}
              />
              <div className="form-message expiry" />
            </div>
            <div className="form-group">
              <input
                type="number"
                id="security"
                name="security"
                maxLength={3}
                className="form-control"
                placeholder="Mã bảo mật VD:123"
              />
              <div className="form-message security" />
            </div>
            <div className="rule_visa">
              Chúng tôi hợp tác với CyberSouce, công ty thuộc tổ chức thẻ VISA,
              nhằm đảm bảo thông tin thẻ Tín dụng/Ghi nợ của bạn luôn được bảo
              mật và an toàn. OBO Stadium không có quyền truy cập vào bất cứ
              thông tin nào.
            </div>
            <div className="button_visa">
              <a data-bs-dismiss="modal" aria-label="Close">
                Hủy bỏ
              </a>
              <button
                className="btn btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
                disabled=""
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
