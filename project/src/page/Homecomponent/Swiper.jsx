import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import parse from "html-react-parser";

// const getProduct = async () => {
//   const res = await fetch(
//     `https://api-product-igm3dkn2k-omg2468.vercel.app/product`
//   );
//   const data = await res.json();
//   setLoading(false);
//   return data;
// };

export default function Swiperhome() {
  const [data, setData] = useState([]);
  const [load, setLoading] = useState(true);

  // useEffect(() => {
  //   getProduct().then(setData);
  // }, []);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(
        `https://api-product-igm3dkn2k-omg2468.vercel.app/product`
      );
      const data = await res.json();
      setLoading(false);
      setData(data);
    };
    getProduct();
  }, []);

  const formattedNumber = (number) => {
    let value = new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 3,
    }).format(number / 1000);
    return value;
  };

  console.log(load);

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

  const listSwiper = data.map((product, index) =>
    product.id > 10 ? (
      <SwiperSlide className="swiper-slide sell" key={index}>
        <img src={product.image} alt="best_sell" />
        <div className="box-description p-2">
          <h3>{product.name}</h3>
          <div className="detail-price d-flex flex-wrap text-md-start text-center">
            <div>
              <b>Giá bán:</b>
            </div>
            <del style={{ display: product.discount ? "block" : "none" }}>
              <i>{formattedNumber(product.price)} VNĐ</i>
            </del>
            <div className="real-price">
              {formattedNumber(
                (product.price * (100 - product.discount)) / 100
              )}
              VNĐ
            </div>
          </div>
          <div className="detail-star">
            <b>Đánh giá:</b> {countStar(product.star)}
          </div>
          <div className="detail-description">
            <b>Mô tả sản phẩm: </b>
            {product.description}
          </div>
          <div className="button-item">
            <div className="add-number-item">
              <i className="bi bi-dash-circle" onclick="dash(event)" />
              <span>1</span>
              <i className="bi bi-plus-circle" onclick="plus(event)" />
            </div>
            <div className="add-item" onclick="orderbox(event)">
              <button>Thêm vào giỏ</button>
            </div>
            <div className="buy-now">
              <a href="/cart">
                <button>Mua ngay</button>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ) : (
      ""
    )
  );

  return (
    <div className="container-fluid best_sell d-flex align-items-center justify-content-center">
      <div className="box_best_sell">
        <div className="best_seller_text text-center mb-4">
          <h2>Sản phẩm bán chạy</h2>
        </div>
        {load ? (
          <h1>Loading</h1>
        ) : (
          <Swiper
            centeredSlides={true}
            spaceBetween={0}
            slidesPerView={1}
            effect={"coverflow"}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            navigation={true}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 2,
            }}
            autoplay={{
              delay: 1000,
            }}
            breakpoints={{
              "@0.4": {
                effect: "",
                spaceBetween: 20,
                centeredSlides: false,
                slidesPerView: 1.2,
              },
              "@0.75": {
                slidesPerView: 1.7,
              },
              "@1.00": {
                slidesPerView: 2,
              },
              "@1.2": {
                slidesPerView: 2.5,
              },
            }}
          >
            {listSwiper}
          </Swiper>
        )}
      </div>
    </div>
  );
}
