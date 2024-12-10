import React from "react";
import { Button, Table } from "react-bootstrap";

const MyTable = ({ data, setAllData }) => {
  const markAsDone = (myIndex) => {
    const updatedData = data.map((data, index) =>
      index === myIndex ? { ...data, completed: !data.completed } : data
    );
    setAllData(updatedData);
  };

  const deleteTodo = (myIndex) => {
    if (window.confirm("Are you sure want to delete this item?")) {
      const updatedData = data.filter((_, index) => index !== myIndex);
      setAllData(updatedData);
    }
  };
  return (
    <div className="mt-4">
      <Table bordered striped>
        <thead className="text-center border">
          <th>#</th>
          <th>Description</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data?.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  className="col-8"
                  style={
                    data.completed
                      ? {
                          backgroundColor: "yellow",
                          color: "red",
                          textDecoration: "line-through",
                        }
                      : { backgroundColor: "" }
                  }
                >
                  {data.todo}
                </td>
                <td className="d-flex justify-content-end">
                  <Button variant="success" onClick={() => markAsDone(index)}>
                    Done!
                  </Button>
                  <Button variant="danger" onClick={() => deleteTodo(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MyTable;
