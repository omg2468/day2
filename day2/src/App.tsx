import { useState } from "react";
import "./App.css";
import Item from "./Item";
import Todoinput from "./Todoinput";
import Filter from "./Filter";

let targetid: number;

interface FormState {
  input: string;
  value: string;
}

interface DataState {
  check: boolean;
  value: string;
  visible: boolean;
}

interface FilterState {
  check: boolean;
  value: string;
  label: string;
}

function App() {
  const [form, setForm] = useState<FormState>({
    input: "",
    value: "THÊM",
  });
  const [data, setData] = useState<DataState[]>([
    {
      check: false,
      value: "mac dinh",
      visible: true,
    },
    {
      check: true,
      value: "thu hai",
      visible: true,
    },
    {
      check: true,
      value: "thu ba",
      visible: true,
    },
  ]);
  const [filter, setFilter] = useState<FilterState[]>([
    {
      check: true,
      value: "All",
      label: "all",
    },
    {
      check: false,
      value: "Chưa Hoàn Thành",
      label: "unactive",
    },
    {
      check: false,
      value: "Hoàn thành",
      label: "active",
    },
  ]);
  const handleItem = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setData(
      data.map((e, index) =>
        index.toString() === target.id ? { ...e, check: !e.check } : e
      )
    );
  };

  const handleAdd = () => {
    if (!form.input) {
      alert("vui long nhap ki tu");
      return;
    }
    if (form.value === "THÊM") {
      setData([...data, { check: false, value: form.input, visible: true }]);
      setForm((prev) => ({ ...prev, input: "" }));
    } else {
      setData(
        data.map((e, index) =>
          index === targetid ? { ...e, value: form.input } : e
        )
      );
      setForm({ input: "", value: "THÊM" });
    }
  };

  const handleForm = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setForm((prev) => ({ ...prev, input: target.value }));
  };

  const handleFix = (target: number) => {
    setForm({ input: data[target].value, value: "CAP NHAT" });
    targetid = target;
  };

  const handleDelete = (target: number) => {
    let newdata = [...data];
    newdata.splice(target, 1);
    setData(newdata);
  };
  const listItem = data.map((e, index) => (
    <Item
      value={e.value}
      check={e.check}
      onChange={handleItem}
      key={index}
      some={index}
      onDelete={handleDelete}
      onFix={handleFix}
      visible={e.visible}
    />
  ));

  const handleFilter = (id: string) => {
    setFilter(
      filter.map((e) =>
        id === e.label ? { ...e, check: true } : { ...e, check: false }
      )
    );
    if (id === "all") {
      setData(data.map((e) => ({ ...e, visible: true })));
    } else if (id === "unactive") {
      setData(
        data.map((e) =>
          e.check ? { ...e, visible: false } : { ...e, visible: true }
        )
      );
    } else if (id === "active") {
      setData(
        data.map((e) =>
          e.check ? { ...e, visible: true } : { ...e, visible: false }
        )
      );
    }
  };

  const filterButton = filter.map((e) => (
    <Filter
      value={e.value}
      check={e.check}
      label={e.label}
      key={e.label}
      onChange={handleFilter}
    />
  ));

  return (
    <div className="container">
      <Todoinput
        onClick={handleAdd}
        value={form.input}
        onChange={handleForm}
        text={form.value}
      />
      <div className="todo-option">{filterButton}</div>
      <div className="todo-container">
        {data.length ? (
          listItem
        ) : (
          <h2 style={{ margin: 20 }}>Không có việc gì</h2>
        )}
      </div>
    </div>
  );
}

export default App;
