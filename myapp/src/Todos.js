import React, { useEffect, useState } from "react";
import { gettodo } from "./GetUsers";
const Todos = () => {
  const [todos, setTodos] = useState(null);
  const [hide, setHide] = useState(true);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")).userID;
    console.log(user);
    gettodo(user).then((t) => setTodos(t));
  }, []);

  function style() {
    return {
      border: "1px solid black",
      backgroundColor: "#eaeaea",
      cursor: "pointer",
    };
  }

  const sort = () => {
    const arr = [...todos];
    arr.sort((x, y) => {
      if (x[sortBy] > y[sortBy]) {
        return hide ? 1 : -1;
      } else if (x[sortBy] < y[sortBy]) {
        return hide ? -1 : 1;
      }
      return 0;
    });
    return arr;
  };

  return (
    <div>
      {!todos?  
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
       :<table
        style={{
          border: "3px solid lightgrey",
          textAlign: "center",
          marginTop: "10px",
        }}
        className="table table-hover"
      >
        <thead style={{ textAlign: "center" }}>
          {
            <tr>
              <th
                onClick={() => {
                  setSortBy("id");
                  sort();
                  setHide(!hide);
                }}
                style={style()}
              >
                id
              </th>
              <th
                onClick={() => {
                  setSortBy("title");
                  sort();
                  setHide(!hide);
                }}
                style={style()}
              >
                title
              </th>
              <th
                onClick={() => {
                  setSortBy("completed");
                  sort();
                  setHide(!hide);
                }}
                style={style()}
              >
                completed
              </th>
            </tr>
          }
        </thead>
        <tbody>
          {todos &&
            sort().map((item, idx) => (
              <tr key={idx}>
                {Object.values(item).map((item2, idx2) =>
                  idx2 > 0 ? (
                    typeof item2 === "boolean" ? (
                      <input
                        type="checkbox"
                        key={idx2}
                        checked={item2}
                        // defaultChecked={item2}
                      />
                    ) : (
                      <td style={{ border: "1px solid black" }} key={idx2}>
                        {item2}
                      </td>
                    )
                  ) : null
                )}
              </tr>
            ))}
        </tbody>
      </table>}
    </div>
  );
};

export default Todos;
