import React from 'react'
import "./cart.css"
import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <div className="container-cart">
      <h2>GIỎ HÀNG</h2>
      <div className="container">
        <div className="row">
          {/* cart desktop */}
          <div className="col-lg-8 d-sm-block d-none">
            <table className="table text-center">
              <thead className="table-primary">
                <tr>
                  <th scope="col">Sản phẩm</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tổng tiền</th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          {/* cart mobile */}
          <div className="col-12 d-block d-sm-none">
            <div className="container-item-2 mb-2"></div>
          </div>
          <div className="col-lg-4 col-12">
            {/* total price */}
            <div className="total_price">
              <h3>Tổng tiền</h3>
              <div className="box-total-price">
                <div className="box-item-money">
                  <div className="item-total-money">
                    <div className="name-item-check">Bánh kem x (1)</div>
                    <div className="money-item-check">150,000 VND</div>
                  </div>
                </div>
                <div className="total_money">
                  <p>Tổng</p>
                  <div className="total-check">150,000 VND</div>
                </div>
              </div>
              <div className="button-oder text-center mb-2">
                <Link to="/cart/checkout">
                  <button>Tiến hành thanh toán</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
