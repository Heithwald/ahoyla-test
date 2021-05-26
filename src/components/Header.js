import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="content-wrapper">
        <div className="content-section">
          <div className="logo"></div>
        </div>
        <div className="content-section">
          <div className="breadcrumbs">
            <div className="breadcrumbs__link">IELTS /</div>
            <div className="breadcrumbs__link">Начальный /</div>
            <div className="breadcrumbs__link">Listening</div>
          </div>
          <h3 className="task-title">Задание 1</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
