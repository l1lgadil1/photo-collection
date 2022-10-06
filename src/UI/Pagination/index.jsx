import React from "react";

const index = ({ page, setPage }) => {
  return (
    <ul className="pagination">
      {[...Array(5)].map((_, i) => (
        <li
          onClick={() => setPage(i + 1)}
          className={page === i + 1 ? "active" : " "}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};

export default index;
