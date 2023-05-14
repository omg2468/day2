import React from "react";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Formdiscount() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategorie = searchParams.getAll("categorydiscount");

  const categorydiscount = [
    {
      value: "discount",
      title: "Có khuyến mãi",
    },
    {
      value: "nodiscount",
      title: "Không khuyến mãi",
    },
  ];

  const listForm = categorydiscount.map((data, index) => (
    <Form.Check
      name="categoryd"
      type="checkbox"
      checked={selectedCategorie.includes(data.value)}
      value={data.value}
      label={data.title}
      key={index + 1}
      id={data.value}
    />
  ));

  const handleForm = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSearchParams((prev) => ({
        ...prev, // sao chép các giá trị hiện tại của searchParams
        categorydiscount: [...selectedCategorie, value], // chỉ thay đổi giá trị của thuộc tính categorydiscount
      }));
    } else {
      setSearchParams((prev) => ({
        ...prev,
        categorydiscount: selectedCategorie.filter((item) => item !== value),
      }));
    }
  };


  return <Form onChange={handleForm}>{listForm}</Form>;
}
