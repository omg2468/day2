import React from "react";
import { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Item from "./Item";
import Option from "./Option";

export default function Menucenter() {
  const [filterdata, setFilterdata] = useState([]);
  const [stateoption, setStateoption] = useState("default");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.toString());
  const selectedCategories = searchParams.getAll("categorycake");
  const selectDiscount = searchParams.getAll("categorydiscount");
  const location = useLocation();
  const navigate = useNavigate();
  const option = [
    {
      value: "default",
      title: "Mặc định",
    },
    {
      value: "increase",
      title: "Giá tăng dần",
    },
    {
      value: "decrease",
      title: "Giá giảm dần",
    },
    {
      value: "starup",
      title: "Xếp hạng cao",
    },
    {
      value: "stardown",
      title: "Xếp hạng thấp",
    },
  ];

  const getProduct = async () => {
    const res = await fetch(
      `https://api-product-igm3dkn2k-omg2468.vercel.app/product`
    );
    const data = await res.json();
    setFilterdata(data);
  };
  useEffect(() => {
    getProduct();
  }, []);

  const { pagenumber } = useParams();

  let dataItem = (
    selectedCategories.length == 0
      ? filterdata
      : filterdata.filter((data) => selectedCategories.includes(data.sort))
  ).map((product, index) =>
    index < pagenumber * 12 && index >= (pagenumber - 1) * 12 ? (
      <Item
        name={product.name}
        price={product.price}
        image={product.image}
        star={product.star}
        discount={product.discount}
        key={product.id}
        sort={product.sort}
      />
    ) : (
      ""
    )
  );
  const listOption = option.map((option, index) => (
    <Option title={option.title} value={option.value} key={index} />
  ));

  const handleOpiton = ({ target }) => {
    setStateoption(target.value);
    setFilterdata(
      filterdata.sort((a, b) => {
        if (target.value === "increase") return a.price - b.price;
        else if (target.value === "decrease") return b.price - a.price;
        else if (target.value === "default") return a.id - b.id;
        else if (target.value === "starup") return b.star - a.star;
        else if (target.value === "stardown") return a.star - b.star;
      })
    );
  };



  return (
    <div className="col-lg-9 col-12">
      <div className="price_sort mb-3">
        <label htmlFor="price">Sắp xếp:</label>
        <select
          name="price"
          id="price"
          onChange={handleOpiton}
          value={stateoption}
        >
          {listOption}
        </select>
      </div>
      <div className="container_menu_items">
        <div className="menu_item d-flex">{dataItem}</div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link
                className="page-link"
                aria-label="Previous"
                id="previous"
                onClick={() => {
                  navigate(`/menu/1${location.search}`);
                }}
              >
                <span aria-hidden="true">«</span>
              </Link>
            </li>
            <li className="page-item">
              <Link
                className={
                  pagenumber === "1" ? "page-link active" : "page-link"
                }
                id="one"
                onClick={() => {
                  navigate(`/menu/1${location.search}`);
                }}
              >
                1
              </Link>
            </li>
            <li className="page-item">
              <Link
                className={
                  pagenumber === "2" ? "page-link active" : "page-link"
                }
                id="two"
                onClick={() => {
                  navigate(`/menu/2${location.search}`);
                }}
                style={{ display: dataItem.length >= 12 ? "block" : "none" }}
              >
                2
              </Link>
            </li>
            <li className="page-item">
              <Link
                className="page-link"
                onClick={() => {
                  if (dataItem.length >= 12)
                    navigate(`/menu/2${location.search}`);
                }}
                aria-label="Next"
                id="next"
              >
                <span aria-hidden="false">»</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
