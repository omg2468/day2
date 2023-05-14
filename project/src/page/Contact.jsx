import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <div className="container form">
      <h2>Liên hệ</h2>

      <div className="row">
        <div className="col-lg-5 col-12">
          <div className="contract_form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Họ và tên*
              </label>
              <input
                type="name"
                className="form-control"
                id="name"
                placeholder="NGUYỄN VĂN A"
              />
              <div className="form-message name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Số điện thoại*
              </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="012345678"
              />
              <div className="form-message phone" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Địa chỉ Email*
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <div className="form-message email" />
            </div>
            <div className="form-group">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Lời nhắn
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-danger mb-4 mb-lg-0 mt-3 button"
          >
            Gửi tin
          </button>
        </div>
        <div className="col-lg-6 offset-lg-1 col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29791.154263129447!2d105.730271!3d21.0369156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345548f4a0dfef%3A0x5d71a9b35e6fe45a!2zVGnhu4dtIGLDoW5oIHNpbmggbmjhuq10IEtha2EgKEtha2EgQmFrZXJ5KQ!5e0!3m2!1svi!2s!4v1678590389521!5m2!1svi!2s"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
