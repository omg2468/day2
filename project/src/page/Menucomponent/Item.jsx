import React from "react";
import parse from "html-react-parser";

export default function Item({ name, price, image, star, discount }) {
  const formattedNumber = (number) => {
    let value = new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 3,
    }).format(number / 1000);
    return value;
  };

  const countStar = (star) => {
    let resultStart = "";
    let full;
    let half;
    let nostar;
    if (star % 1 == 0) {
      full = star;
      nostar = 5 - star;
      half = 0;
    } else {
      full = star - 0.5;
      nostar = 5 - star - 0.5;
      half = 1;
    }
    for (let i = 0; i < full; i++) {
      resultStart += `<i className="bi bi-star-fill"></i>`;
    }
    resultStart += half ? `<i className="bi bi-star-half"></i>` : "";
    for (let i = 0; i < nostar; i++) {
      resultStart += `<i className="bi bi-star"></i>`;
    }
    return parse(resultStart);
  };

  return (
    <div className="box_items position-relative" data-sort={sort}>
      <div
        className="discount position-absolute"
        style={{ display: discount ? "" : "none" }}
      >
        {discount}%
      </div>
      <div className="img_item">
        <a href="detail_item.html?id=1">
          <img src={image} alt={name} />
        </a>
      </div>
      <div className="name_item">{name}</div>
      <div className="price_item d-flex justify-content-center">
        <div className={discount ? "real_price discounts" : "real_price"}>
          {formattedNumber(price)} VNĐ
        </div>
        <div
          className="discount_price"
          style={{ display: discount ? "block" : "none" }}
        >
          {formattedNumber((price * (100 - discount)) / 100)}
          VNĐ
        </div>
      </div>
      <div className="star_item">{countStar(star)}</div>
      <div className="button_oder">
        <button type="button" className="btn btn-danger">
          Đặt hàng ngay
        </button>
      </div>
    </div>
  );
}
