import React, { useContext, useEffect, useState } from "react";
import "../../components/table.css";
import axios from "axios";
import { Context } from "../../../../context/Context";

const Users = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const context = useContext(Context);
  const language = context.langValue;
  const token = context.userDetails.token;
  const lang = context.language && context.language;

  function fetchUsers() {
    axios
      .get("http://localhost:8000/api/users", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setData(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const handleSearch = (e) => {
    const inpValue = e.target.value.toLowerCase();
    if (inpValue === "") {
      setSearchData(data);
    } else {
      const filteredData = data.filter(
        (item) =>
          item.username.toLowerCase().includes(inpValue) ||
          item.role.toLowerCase().includes(inpValue)
      );
      setSearchData(filteredData);
    }
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setOverlayVisible(true);
  };

  const handleConfirmDelete = () => {
    axios.delete(`http://localhost:8000/api/users/${selectedItem._id}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setOverlayVisible(false);
    fetchUsers();
  };

  const handleCancelDelete = () => {
    setOverlayVisible(false);
    setSelectedItem(null);
  };
  document.body.addEventListener("click", (e) => {
    const overlay = document.querySelector("div.main-dashboard > div.overlay");
    if (e.target === overlay) {
      setOverlayVisible(false);
      setSelectedItem(null);
    } else return false;
  });
  const tableData = searchData.map((item, index) => (
    <tr key={item._id}>
      <td>{index + 1}</td>
      <td className="align-left">{item.username}</td>
      <td>{item.role}</td>
      <td>
        <span
          data-content={lang && lang.activity.delete}
          onClick={() => handleDeleteClick(item)}
        >
          <i className="fa-solid fa-trash"></i>
        </span>
      </td>
    </tr>
  ));

  return (
    <div className="main-dashboard">
      {overlayVisible && (
        <div className="overlay">
          <div className="content">
            <h3>{lang && lang.dashbord_tables.delete_sure}</h3>
            <div className="center">
              <span className="flex-1 cancel" onClick={handleCancelDelete}>
                {lang && lang.dashbord_tables.cancel}
              </span>
              <span className="flex-1 delete" onClick={handleConfirmDelete}>
                <i className="fa-solid fa-trash"></i>
                {lang && lang.dashbord_tables.confirm}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="dashboard-container">
        <article className="search no-wrap">
          <input
            onChange={handleSearch}
            type="text"
            placeholder={language && language.dashboard.table.search}
            className="flex-1"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </article>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>{lang.dashbord_tables && lang.dashbord_tables.user}</th>
                <th>{lang.dashbord_tables && lang.dashbord_tables.role}</th>
                <th>{lang.dashbord_tables && lang.dashbord_tables.action}</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
