import React from "react";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Formcake() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategories = searchParams.getAll("categorycake");

  const categorycake = [
    { value: "cake1", title: "Bánh ngọt" },
    { value: "cake2", title: "Bánh mặn" },
    { value: "cake3", title: "Bánh mì" },
    { value: "cake4", title: "Bánh kem" },
  ];

  const listForm = categorycake.map((data, index) => (
    <Form.Check
      name="category"
      type="checkbox"
      checked={selectedCategories.includes(data.value)}
      value={data.value}
      label={data.title}
      key={index + 1}
      id={data.value}
    />
  ));

  const handleForm = (e) => {
    const { checked, value } = e.target;
    if (checked) {
    setSearchParams((prev) => ({
      ...prev, // sao chép các giá trị hiện tại của searchParams
      categorycake: [...selectedCategories, value], // chỉ thay đổi giá trị của thuộc tính categorycake
    }));
    } else {
      setSearchParams((prev) => ({
        ...prev,
        categorycake: selectedCategories.filter((item) => item !== value),
      }));
    }
  };

  return (
    <Form onChange={handleForm}>
      {/* <input type="checkbox" id="cake1" name="cake1" defaultValue="cake1" />
      <label htmlFor="cake1">Bánh ngọt</label>
      <br />
      <input type="checkbox" id="cake2" name="cake2" defaultValue="cake2" />
      <label htmlFor="cake2">Bánh mặn</label>
      <br />
      <input type="checkbox" id="cake3" name="cake3" defaultValue="cake3" />
      <label htmlFor="cake3">Bánh mì</label>
      <br />
      <input type="checkbox" id="cake4" name="cake4" defaultValue="cake4" />
      <label htmlFor="cake4">Bánh kem</label> <br /> */}
      {listForm}
    </Form>
  );
}
