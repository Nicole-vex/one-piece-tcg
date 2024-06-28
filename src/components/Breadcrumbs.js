// src/components/Breadcrumbs.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Breadcrumbs.css';

function Breadcrumbs({ crumbs }) {
  return (
    <nav className="breadcrumbs">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          {index > 0 && " > "}
          <Link to={crumb.path}>{crumb.label}</Link>
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
