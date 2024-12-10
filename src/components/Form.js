import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, FormControl } from "react-bootstrap";
import Table from "./Table";

const Todo = "todos";

const MyForm = () => {
  const [allData, setAllData] = useState(() => {
    const savedData = localStorage.getItem(Todo);
    return savedData ? JSON.parse(savedData) : [];
  });

  const [formData, setFormData] = useState({ todo: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllData([...allData, formData]);
    setFormData({ todo: "" });
  };

  localStorage.setItem(Todo, JSON.stringify(allData));

  const resetData = () => {
    setFormData({ todo: "" });
  };

  const clearData = () => {
    setAllData([]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todos</h1>
      <Form onSubmit={handleSubmit}>
        <FormControl
          className="fs-5 py-2 mb-2"
          placeholder="Add Todo"
          type="text"
          id="todo"
          name="todo"
          value={formData.todo}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="col-4">
          Submit
        </Button>
        <Button variant="warning" className="col-4" onClick={resetData}>
          Reset Form
        </Button>
        <Button variant="danger" className="col-4" onClick={clearData}>
          Delete All Todo
        </Button>
      </Form>

      <Table data={allData} setAllData={setAllData} />
    </div>
  );
};

export default MyForm;
