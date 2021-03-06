import React, {useState} from 'react';
import {Link} from 'react-router-dom';

 const Sidebar = (props) => {


    return (
        

      <div className="bg-light" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
          <i className="fas fa-robot" /> Houston Dynamics
    </div>
        <div className="list-group list-group-flush my-3">

          <Link to="/" className="list-group-item list-group-item-action bg-light second-text fw-bold">
            <i className="fas fa-tachometer-alt me-2" />Dashboard
      </Link>

          <Link to="/warehouses" className="list-group-item list-group-item-action bg-light second-text fw-bold ">
            <i className="fas fa-warehouse" /> Warehouses
          </Link>

          <Link to="/robots"  className="list-group-item list-group-item-action bg-light second-text fw-bold">
        <i className="fas fa-robot" /> Robots
        </Link>

<<<<<<< HEAD
        <Link to="/analytics" className="list-group-item list-group-item-action bg-light second-text fw-bold">
=======
        <Link to="/assigneds" className="list-group-item list-group-item-action bg-transparent second-text fw-bold">
>>>>>>> main
        <i className="fas fa-tasks" />Assigned
        </Link>
        </div>
      </div>

    )
}

module.exports = Sidebar