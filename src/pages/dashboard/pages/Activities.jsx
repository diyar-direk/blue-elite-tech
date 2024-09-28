import React, { useContext, useEffect, useState } from "react";

import "./activities.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Activities = () => {
  const [api, setApi] = useState([]);
  const [dataFltr, setDataFltr] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8000/api/activity", {
  //         headers: { Authorization: "Bearer " + token },
  //       })
  //       .then((res) => {
  //         setApi(res.data.data);
  //         setDataFltr(res.data.data);
  //       });
  //   }, []);

  //   const data =
  //     dataFltr &&
  //     dataFltr.map((e, i) => {
  //       const action = e.action;
  //       const type = e.type;
  //       const actionVal =
  //         action === "DELETE"
  //           ? language.delete
  //           : action === "UPDATE"
  //           ? language.update
  //           : language.create;
  //       return (
  //         <article key={i} className={action}>
  //           <h2>{actionVal}</h2>
  //           <div className="between">
  //             <div>
  //               <p>{e.details}</p>
  //               <span> {timeAgo(e.timestamp, time)} </span>
  //             </div>
  //             <div>
  //               <p> {e.userId ? e.userId.username : "user not found   "} </p>
  //               {action !== "DELETE" && type === "news" && (
  //                 <Link to={`/read/${e.target}`}>{language.btn}</Link>
  //               )}
  //             </div>
  //           </div>
  //         </article>
  //       );
  //     });

  function active(e) {
    const divs = document.querySelectorAll(
      "div.main-dashboard .dashboard-container.activities > div.flex > div"
    );
    divs.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
    if (e.target.dataset.chose !== "all") {
      const fltr = api.filter((ele) => ele.action === e.target.dataset.chose);
      setDataFltr(fltr);
    } else {
      setDataFltr(api);
    }
  }

  return (
    <div className="main-dashboard">
      <div className="dashboard-container activities">
        <div className="flex">
          <div className="add" data-chose="CREATE" onClick={active}>
            <i className="fa-solid fa-plus"></i>
            <span>create</span>
          </div>

          <div className="update" data-chose="UPDATE" onClick={active}>
            <i className="fa-solid fa-wrench"></i>
            <span>update</span>
          </div>

          <div className="delete" data-chose="DELETE" onClick={active}>
            <i className="fa-solid fa-trash-can "></i>
            <span>delete</span>
          </div>

          <div className="active" data-chose="all" onClick={active}>
            <span>show all</span>
          </div>
        </div>

        {/* {data} */}
      </div>
    </div>
  );
};

export default Activities;