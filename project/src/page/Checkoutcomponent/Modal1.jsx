import React from 'react'

import vietqr from "../../component/images/vietqr.png";
import vietqrcode from "../../component/images/vietqr_code.png";
import napas247 from "../../component/images/logo_napas247-removebg-preview.png";
import vietinbank from "../../component/images/logo-vietinbank.png";
export default function Modal1() {
  return (
    <div
      className="modal fade bank"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Bank Transfer
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body text-center">
            <div className="bank_name">
              <img src={vietqr} alt="qr" />
            </div>
            <div className="bank_qr">
              <img src={vietqrcode} alt="qr-code" />
            </div>
            <div className="napas_bank d-flex justify-content-around">
              <img src={napas247} alt="napas247" />
              <img src={vietinbank} alt="vietinbank" />
            </div>
            <div className="info_bank">
              <p>Số tiền: 500,000 VND</p>
              <p>Noi dung CK: BREAD500</p>
              <p>Tên Chủ TK: NGUYỄN ĐỨC ANH</p>
              <p>
                <b>Số TK: 1111309080</b>
              </p>
              <p>Ngân hàng TMCP Công thương Việt Nam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
